import { initialItems } from "../lib/constants";
import { useState } from "react";

export default function ItemList() {
    const [items, setItems] = useState(initialItems);
  return (
    <ul>
    {items.map(item => {
        return <Item key={item.id} item={item}/>
    })}
    </ul>
  )
}


function Item({item}) {
  return (
      <li className="item">
        <label htmlFor="999">
        <input checked={item.packed} type="checkbox"/>
        {item.name}
        </label>
        <button>❌</button>
     </li>
  )
}