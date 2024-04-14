import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetBtn from "./ResetBtn";
import Title from "./Title";
import { useEffect, useState } from "react";
import CountBtn from "./CountButton";


export default function Card() {

  //Use useState to keep track of things inside DOM/React
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  //Use useEffect to track info outside DOM/React

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.code === 'Space'){
        const newCount = count + 1;
        if(newCount > 5){
          return ;
        }
        setCount(count + 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    //cleaning function - Pulisce l'event listener precedente che viene richiamato ogni volta 
    //utilizzando useEffect tracciamo count e aggiungiamo un event listener ogni volta
    //quindi lo togliamo dopo averlo usato e aggiornato.
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    } 
  }, [count]); //dependencies array



  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
        <Title locked={locked} /> 
        <Count count={count} />
        <ResetBtn setCount={setCount} />
        <ButtonContainer>
          <CountBtn type="minus" locked={locked} setCount={setCount}/>
          <CountBtn type="plus" locked={locked} setCount={setCount} />
        </ButtonContainer>
      </div>
  )
}
