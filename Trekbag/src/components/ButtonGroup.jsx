import Button from "./Button";
//import {secondaryButtonsText} from "../lib/constants";

export default function ButtonGroup({
  handleMarkAllAsComplete, handleMarkAllAsIncomplete,
   handleRemoveAllItems, handleResetToInitial}) {

       const secondaryButtons = [
      {
        text: 'Mark all as complete',
        onClick: handleMarkAllAsComplete
        }, {
          text: 'Mark all as incomplete',
          onClick: handleMarkAllAsIncomplete
          }, {
            text: 'Reset to initial',
            onClick: handleResetToInitial
            }, {
              text: 'Remove all items',
              onClick: handleRemoveAllItems
        }
      ];

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

{
        secondaryButtons.map(({text, onClick}) => {
          return <Button 
          key={text + onClick.toString()} 
          buttonType="secondary" 
          onClick={onClick}
          >{text}</Button>
        })
      }

 

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
