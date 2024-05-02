import { initialItems } from "../lib/constants"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"
import { useState } from "react"

function App() {
  const [items, setItems] = useState(initialItems);

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
      <ItemList items={items} />
      <Sidebar setItems={setItems}/>
    </main>
    < Footer />
    </>
  )
}

export default App
