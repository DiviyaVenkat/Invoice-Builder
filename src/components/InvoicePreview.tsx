import logo from "../assets/logo.svg";

export default function InvoicePreview({
  invoiceRef,
  invoiceNo,
  date,
  customer,
  items,
  subtotal,
  gst,
  gstAmount,
  total
}: any) {
  return (
    <div
      ref={invoiceRef}
      className="bg-white text-gray-800 p-8 rounded-lg shadow"
    >
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 bg-primary text-white p-2 invoice-title">INVOICE</h2>

      <div className="flex justify-between mb-6">
        <div className="text-left">
          <img src={logo} alt="logo" className="h-8 mb-2" />
          <p><span className="font-bold">Invoice No:</span> {invoiceNo}</p>
          <p><span className="font-bold">Date:</span> {date}</p>
        </div>

        <div className="text-right">
          <p className="font-bold">Bill To:</p>
          <p>{customer.name}</p>
          <p>{customer.address}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300 text-sm" style={{tableLayout: "fixed"}}>
        <thead className="bg-gray-100">
          <tr className="preview-tableRow">
            <th className="border px-4 py-2 text-left">Product</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-center">Qty</th>
            <th className="border px-4 py-2 text-right">Rate</th>
            <th className="border px-4 py-2 text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item: any) => (
            <tr key={item.id} className="preview-tableRow">
              <td className="border px-4 py-2">{item.product}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2 text-center">{item.quantity}</td>
              <td className="border px-4 py-2 text-right">₹{item.rate}</td>
              <td className="border px-4 py-2 text-right">
                ₹{(item.quantity * item.rate).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="mt-6 flex justify-end">
        <div className="text-right space-y-1">
          <p><span className="font-medium">Subtotal:</span> ₹{subtotal.toFixed(2)}</p>
          <p><span className="font-medium">GST ({gst}%):</span> ₹{gstAmount.toFixed(2)}</p>
          <h3 className="text-lg font-bold">
            Total: ₹{total.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}