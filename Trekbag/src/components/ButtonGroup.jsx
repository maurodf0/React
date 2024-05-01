import Button from "./Button";

const secondaryButtonsText = [
    "Mark all as complete", 
    "Mark all as incomplete", 
    "Reset to initial", 
    "Remove all items"
    ];

export default function ButtonGroup() {

  return (
    <section className="button-group">
     {secondaryButtonsText.map(text => {
        return <Button key="{text}" type="secondary">{text}</Button>
     })}
    </section>
  )
}
