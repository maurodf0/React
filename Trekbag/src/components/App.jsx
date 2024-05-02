import { initialItems } from "../lib/constants"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { useState } from "react"

function App() {
  const [items, setItems] = useState(initialItems);

  // creiamo una funzione generica per gestire le nuove tasks
  //in modo da non dover passare setItems in tutti i component
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    }

    const newItems = [...items, newItem]
    setItems(newItems);
  }

  const handleRemoveItem = (id) => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems);
  }

  const handleToggleItem = (id) => {
    const newItems = items.map(item => {
      if(item.id === id) {
        return {...item, packed: !item.packed}
      }
      return item
    })
    setItems(newItems);
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }

  const handleResetToInitial = () => {
    setItems(initialItems);
  }

  const handleMarkAllAsComplete = () => {
    const newItems = items.map(item => {
      //prendiamo tutto il valore di items e lo aggiorniamo
      //in modo che tutti i valori packed siano true
      return {...item, packed: true}
    })
    setItems(newItems);
  }

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map(item => {
      //prendiamo tutto il valore di items e lo aggiorniamo
      //in modo che tutti i valori packed siano false
      return {...item, packed: false}
    })
    setItems(newItems);
  }


  return (
    <>
    <BackgroundHeading />
    <main>
      <Header />
      {/* passiamo la funzione setItems e le props item 
      dal component per gestirle in tutta l'app
      passandole ad altri components (prendiamo 
      i valori dai singoli component e li portiamo ad un lviello più alto 
      nell'app) */}
      <ItemList 
        handleRemoveItem={handleRemoveItem} 
        handleToggleItem={handleToggleItem}
        items={items} />
      <Sidebar
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleResetToInitial={handleResetToInitial}
        handleAddItem={handleAddItem} 
        handleRemoveAllItems={handleRemoveAllItems}/>
    </main>
    < Footer />
    </>
  )
}

export default App
