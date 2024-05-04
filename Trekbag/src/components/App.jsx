import ItemsContextProvider from "../contexts/ItemsContextProvider"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"

function App() {


  return (
    <>
    <BackgroundHeading />
    <main>
      <ItemsContextProvider>
        <Header />
        {/* passiamo la funzione setItems e le props item 
        dal component per gestirle in tutta l'app
        passandole ad altri components (prendiamo 
        i valori dai singoli component e li portiamo ad un lviello più alto 
        nell'app) */}
        <ItemList  />
        <Sidebar/>
      </ItemsContextProvider>
    </main>
    < Footer />
    </>
  )
}

export default App
