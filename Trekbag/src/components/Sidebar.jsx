import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({handleMarkAllAsIncomplete, handleAddItem, handleMarkAllAsComplete, handleRemoveAllItems, handleResetToInitial}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup 
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}/>
    </div>
  )
}
