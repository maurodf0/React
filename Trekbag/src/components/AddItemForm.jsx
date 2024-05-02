import Button from "./Button.jsx";
import { useState } from "react";

export default function AddItemForm({setItems}) {
  const [itemText, setItemText] = useState("");
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();

        // Basic Validation
        if(!itemText){
          alert("Item can'be empty");
          return;

        }

        const newItem = {
          id: new Date().getTime(),
          name: itemText,
          packed: false,
        }
        setItems(prev => [...prev, newItem]);
        setItemText("");
    }}>
      <h2>Add an Item</h2>
      <input 
      autoFocus="true"
      value={itemText} 
      onChange={(e) => setItemText(e.target.value)}/>
      <Button>Add item to list</Button>
      </form>
  )
}
