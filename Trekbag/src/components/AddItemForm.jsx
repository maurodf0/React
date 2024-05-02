import Button from "./Button.jsx";
import { useState, useRef } from "react";


export default function AddItemForm({onAddItem}) {
  const [itemText, setItemText] = useState("");
  // usiamo useRef per avere un riferimento di un elemento nel DOM
  // tipo document.querySelector
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    // Basic Validation
    if(!itemText){
      alert("Item can'be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an Item</h2>
      <input 
      //con l'attributo ref possiamo accedere a un elemento nel DOM
      //precedentemente selezionato con useRef
      ref={inputRef}
      autoFocus
      value={itemText} 
      onChange={(e) => setItemText(e.target.value)}/>
      <Button>Add item to list</Button>
      </form>
  )
}
