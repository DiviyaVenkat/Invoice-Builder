import { useState, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import Header from "./components/Header";
import CustomerForm from "./components/CustomerForm";
import ItemTable from "./components/ItemTable";
import InvoicePreview from "./components/InvoicePreview";
import Sidebar from "./components/SideBar";
import type { InvoiceItem, Customer } from "./types.ts";

const STORAGE_KEY = "invoice_app_data";

export default function App() {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [customer, setCustomer] = useState<Customer>({
    name: "", address: "", email: "", phone: ""
  });

  const [invoiceNo, setInvoiceNo] = useState("INV-001");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [gst, setGst] = useState(18);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      setCustomer(data.customer);
      setInvoiceNo(data.invoiceNo);
      setDate(data.date);
      setItems(data.items);
      setGst(data.gst);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ customer, invoiceNo, date, items, gst }));
  }, [customer, invoiceNo, date, items, gst]);

  const addItem = () => {
    const newItem = { id: Date.now(), product: "", description: "", quantity: 1, rate: 0 };
    setItems([...items, newItem]);
    setEditingId(newItem.id);
  };

  const updateItem = (id: number, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(i => i.id === id ? { ...i, [field]: value } : i));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(i => i.id !== id));
  };

  const subtotal = items.reduce((acc, i) => acc + i.quantity * i.rate, 0);
  const gstAmount = (subtotal * gst) / 100;
  const total = subtotal + gstAmount;

  const downloadPDF = async () => {
  if (!invoiceRef.current) return;

  // 🔹 Clone the invoice DOM
  const clonedNode = invoiceRef.current.cloneNode(true) as HTMLElement;

  // 🔹 Apply safe styles (NO oklch)
  clonedNode.style.background = "#ffffff";
  clonedNode.style.color = "#000";

  clonedNode.querySelectorAll("*").forEach((el: any) => {
    el.style.backgroundColor = "#ffffff";
    el.style.color = "#000000";
    el.style.borderColor = "#cccccc";
  });

  // 🔹 Hide it off-screen
  clonedNode.style.position = "fixed";
  clonedNode.style.top = "-9999px";
  document.body.appendChild(clonedNode);

  // 🔹 Render safely
  const canvas = await html2canvas(clonedNode, { scale: 2 });
  const img = canvas.toDataURL("image/png");

  const pdf = new jsPDF();
  pdf.addImage(img, "PNG", 0, 0, 210, (canvas.height * 210) / canvas.width);
  pdf.save(`${invoiceNo}.pdf`);

  // 🔹 Cleanup
  document.body.removeChild(clonedNode);
};
  return (
    <div style={{ padding: "0px", background: "#f3f4f6", overflow: "hidden" }}>
      <Sidebar />
      <div style={{ padding: "20px", display: "flex", overflowY: "auto" }} className="invoice-builder-container">
        <div style={{ flex: 1 , marginRight: "20px", maxWidth: "40%" }}>
          <Header {...{ invoiceNo, date, setInvoiceNo, setDate }} />
          <CustomerForm {...{ customer, setCustomer }} />

          <ItemTable
            {...{ items, editingId, setEditingId, updateItem, removeItem, addItem }}
          />

        </div>
        <div className="bg-white p-4" style={{ flex: 1, maxWidth: "60%" }}>
          <InvoicePreview
            {...{ invoiceRef, invoiceNo, date, customer, items, subtotal, gst, gstAmount, total }}
          />

          <button className="download-btn" onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}