type TotalsProps = {
  subtotal: number;
  tax: number;
  setTax: (v: number) => void;
  taxAmount: number;
  total: number;
}

export function Totals({ subtotal, tax, setTax, taxAmount, total }: TotalsProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span>GST (%)</span>
        <input type="number" className="input w-24" value={tax} onChange={e => setTax(Number(e.target.value))} />
      </div>

      <div className="text-right space-y-1">
        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
        <p>Tax: ₹{taxAmount.toFixed(2)}</p>
        <p className="font-bold text-lg text-indigo-600">Grand Total: ₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
}