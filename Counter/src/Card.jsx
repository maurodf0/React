import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetBtn from "./ResetBtn";
import Title from "./Title";
import { useEffect, useState } from "react";


export default function Card() {

  //Use useState to keep track of things inside DOM/React
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  //Use useEffect to track info outside DOM/React
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if(e.code === 'Space'){
        setCount(count + 1)
      }
    });

    return () => {} //cleaning function - Pulisce l'event listener precedente.
  }, [count]); //dependencies array



  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
        <Title locked={locked} /> 
        <Count count={count} />
        <ResetBtn setCount={setCount} />
        <ButtonContainer count={count} setCount={setCount}  locked={locked}/>
      </div>
  )
}
