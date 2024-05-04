import EmptyView from "./EmptyView";
import Select from "react-select";
import {useMemo, useState} from "react";
import { useItemsStore } from "../stores/itemsStore";



const sortingOptions = [
  {
    value: "default", 
    label: "Sort by default"
},
  {
    value: "packed", 
    label: "Sort by packed"
  },
  {
    value: "unpacked", 
    label: "Sort by unpacked"
  },
]

export default function ItemList() {

  const items = useItemsStore(state => state.items);
  const [sortBy, setSortBy] = useState('default');

  const removeItem = useItemsStore(state => state.removeItem);
  const toggleItem = useItemsStore(state => state.toggleItem);

  const sortedItems = useMemo( () => {
    return [...items].sort((a, b) => {
    if(sortBy === 'packed') {
      return b.packed - a.packed;
    }
    if(sortBy === 'unpacked') {
      return a.packed - b.packed;
    }

    return;
  })
  // Array indica che devo aggiornare solo se items o sortBy cambiano
}, [items, sortBy]);

  return (
    <ul className="item-list">
       {items.length === 0 ? <EmptyView /> : null}

    {items.length > 0 ? <section className="sorting">
      <Select 
        onChange={(option) => {setSortBy(option.value)}} 
        options={sortingOptions} 
        defaultValue={sortingOptions[0]} />
    </section> : null/*items.map(item => <Item key={item.id} item={item} onRemoveItem={handleRemoveItem} onToggleItem={handleToggleItem}/>)*/}

    {sortedItems.map(item => {
        return <Item  
          key={item.id} 
          item={item}  
          onRemoveItem={removeItem}
          onToggleItem={toggleItem}/>
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