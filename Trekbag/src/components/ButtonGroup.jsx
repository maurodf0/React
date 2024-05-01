import Button from "./Button";
import {secondaryButtonsText} from "../lib/constants";

export default function ButtonGroup() {

  return (
    <section className="button-group">
     {secondaryButtonsText.map(text => {
        return <Button key="{text}" type="secondary">{text}</Button>
     })}
    </section>
  )
}
