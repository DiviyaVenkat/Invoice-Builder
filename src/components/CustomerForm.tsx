export default function CustomerForm({ customer, setCustomer }: any) {
  return (
    <div>
      <h2 className="headingCls">Billing Details</h2>
      <div className="rounded-xl mb-6 grid grid-cols-2 gap-4">
        <div className="form-row">
            <label htmlFor="name" className="block text-sm font-medium text-gray-500 text-left mb-2">Name</label>
            <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" value={customer.name} placeholder="Name"
        onChange={e => setCustomer({ ...customer, name: e.target.value })} />
        </div>
        <div className="form-row">
            <label htmlFor="name" className="block text-sm font-medium text-gray-500 text-left mb-2">Address</label>
            <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" value={customer.address} placeholder="Address"
        onChange={e => setCustomer({ ...customer, address: e.target.value })} />
        </div>
        <div className="form-row">
            <label htmlFor="name" className="block text-sm font-medium text-gray-500 text-left mb-2">Email Address</label>
            <input className="boxShadowInner  max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" value={customer.email} placeholder="Email"
            onChange={e => setCustomer({ ...customer, email: e.target.value })} />
        </div>
        <div className="form-row">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-500 text-left mb-2">Phone</label>

            <input className="boxShadowInner max-w-full w-full p-2 text-sm focus:border-pink-600 rounded-lg" value={customer.phone} placeholder="Phone"
            onChange={e => setCustomer({ ...customer, phone: e.target.value })} />
        </div>
      </div>
      
    </div>
  );
}