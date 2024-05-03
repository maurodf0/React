import EmptyView from "./EmptyView"

export default function ItemList({items, handleRemoveItem, handleToggleItem}) {
  return (
    <ul className="item-list">
       {items.length === 0 ? <EmptyView /> : null}
    {items.map(item => {
        return <Item  
          key={item.id} 
          item={item}  
          onRemoveItem={handleRemoveItem}
          onToggleItem={handleToggleItem}/>
    })}
    </ul>
  )
}


function Item({item, onRemoveItem, onToggleItem}) {
  return (
      <li className="item">
        <label htmlFor="999">
        <input onChange={() => onToggleItem(item.id)} checked={item.packed} type="checkbox"/>
        {item.name}
        </label>
        <button 
          onClick={() => {
            onRemoveItem(item.id)
          }}>❌</button>
     </li>
  )
}