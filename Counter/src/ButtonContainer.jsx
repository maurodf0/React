import CountBtn from "./CountButton";


export default function ButtonContainer({setCount, locked}) {
 return (
        <div className="button-container">
          <CountBtn type="minus" locked={locked} setCount={setCount}/>
          <CountBtn type="plus" locked={locked} setCount={setCount} />
   
        </div>
 );
}

