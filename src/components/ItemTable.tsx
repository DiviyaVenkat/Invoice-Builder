import ItemRow from "./ItemRow";

export default function ItemTable({ items, editingId, setEditingId, updateItem, removeItem, addItem }: any) {
  return (
    <div>
      <h2 className="headingCls">Items</h2>

      {items.map((item: any) => (
        <ItemRow
          key={item.id}
          item={item}
          isEditing={editingId === item.id}
          onEdit={() => setEditingId(item.id)}
          onDelete={() => removeItem(item.id)}
          onChange={(field: any, value: any) => updateItem(item.id, field, value)}
        />
      ))}

      <button onClick={addItem} className="add-btn text-white font-bold py-2 px-4 rounded">+ Add Item</button>
    </div>
  );
}