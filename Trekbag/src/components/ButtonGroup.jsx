import Button from "./Button";
//import {secondaryButtonsText} from "../lib/constants";
import { useItemsStore } from "../stores/itemsStore";

export default function ButtonGroup() {

const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete);
const resetToInitial = useItemsStore(state => state.resetToInitial);
const removeAllItems = useItemsStore(state => state.removeAllItems);

      //  const secondaryButtons = [
      // {
      //   text: 'Mark all as complete',
      //   onClick: handleMarkAllAsComplete
      //   }, {
      //     text: 'Mark all as incomplete',
      //     onClick: handleMarkAllAsIncomplete
      //     }, {
      //       text: 'Reset to initial',
      //       onClick: handleResetToInitial
      //       }, {
      //         text: 'Remove all items',
      //         onClick: handleRemoveAllItems
      //   }
      // ];

  return (
    <section className="button-group">
      
      {/* {
        without destructuring

        secondaryButtons.map(button => {
          return <Button 
          key={button.text} 
          buttonType="secondary" 
          onClick={button.onClick}
          >{button.text}</Button>
        })
      } */}

{/* {
        secondaryButtons.map(({text, onClick}) => {
          return <Button 
          key={text + onClick.toString()} 
          buttonType="secondary" 
          onClick={onClick}
          >{text}</Button>
        })
      } */}

<Button onClick={markAllAsComplete} buttonType="secondary">Mark all as complete</Button>
<Button onClick={markAllAsIncomplete} buttonType="secondary">Mark all as Incomplete</Button>
<Button onClick={resetToInitial} buttonType="secondary">Reset to initial</Button>
<Button onClick={removeAllItems} buttonType="secondary">Remove all Items</Button>
 

     {/* Specifichiamo una Prop che viene passata al button
     questo perchè un component non ha accesso agli eventi
     e li passiamo tramite props */}
     {/* <Button 
      onClick={handleRemoveAllItems} 
      buttonType="secondary">
        Remove all items
      </Button> */}
    </section>
  )
}
