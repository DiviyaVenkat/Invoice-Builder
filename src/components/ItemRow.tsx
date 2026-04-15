export default function ItemRow({ item, onDelete, onChange }: any) {
  return (
    <div className="rounded-xl mb-4 flex flex-row flex-nowrap justify-start items-center gap-4">
      <div className="form-row flex-1">
        <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" value={item.product} onChange={e => onChange("product", e.target.value)} placeholder="Product Name" />
      </div>
      
        <div className="form-row flex-1">
            <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" value={item.description} onChange={e => onChange("description", e.target.value)} placeholder="Description" />
        </div>
      
        <div className="form-row flex-1">
            <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" type="number" value={item.quantity} onChange={e => onChange("quantity", Number(e.target.value))} placeholder="Quantity" />
        </div>
        <div className="form-row flex-1">
            <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" type="number" value={item.rate} onChange={e => onChange("rate", Number(e.target.value))} placeholder="Rate" />
        </div>
      

      <div style={{ display: "flex", gap: "6px" }}>
        {/* <button onClick={onEdit}>✏️</button> */}
        <button onClick={onDelete} style={{ color: "red" }}>🗑️</button>
      </div>
    </div>
  );
}