
export default function Header({ invoiceNo, date, setInvoiceNo, setDate }: any) {
  return (
    <div>
      <h2 className="headingCls">Invoice Details</h2>
      <div className="rounded-xl mb-6 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 text-left mb-2">Invoice Number</label>
          <input className="boxShadowInner max-w-full w-full p-2 text-sm border border-gray-200 focus:border-pink-600 rounded-lg" value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-900 text-left mb-2">Date</label>
          <input className="boxShadowInner max-w-full w-full p-2 text-sm border border-gray-200 focus:border-pink-600 rounded-lg" type="date" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        
      </div>
    </div>
  );
}