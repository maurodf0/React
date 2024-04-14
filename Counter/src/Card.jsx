import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetBtn from "./ResetBtn";
import Title from "./Title";
import { useState } from "react";


export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
        <Title locked={locked} /> 
        <Count count={count} />
        <ResetBtn setCount={setCount} />
        <ButtonContainer count={count} setCount={setCount}  locked={locked}/>
      </div>
  )
}
