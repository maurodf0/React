export default function ItemList({items, handleRemoveItem, handleToggleItem}) {
  return (
    <ul>
    {items.map(item => {
        return <Item  
          key={item.id} 
          item={item}  
          handleRemoveItem={handleRemoveItem}
          handleToggleItem={handleToggleItem}/>
    })}
    </ul>
  )
}


function Item({item, handleRemoveItem, handleToggleItem}) {
  return (
      <li className="item">
        <label htmlFor="999">
        <input onChange={() => handleToggleItem(item.id)} checked={item.packed} type="checkbox"/>
        {item.name}
        </label>
        <button 
          onClick={() => {
            handleRemoveItem(item.id)
          }}>❌</button>
     </li>
  )
}