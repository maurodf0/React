import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountBtn({setCount, type, locked}){

    const handleClick = (e) => {
        setCount(prev => {
            if (type === "minus") {
                const newCount = prev - 1;
                if(newCount < 0){
                    return 0;
                }
                return newCount
            } else {
                const newCount = prev + 1;
                if(newCount > 5){
                    return 5;
                }
                return newCount
            }
        });
        e.target.blur();
        console.log(e);
        }
    return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
        { type === "minus" ? <MinusIcon className="count-btn-icon"/> : <PlusIcon className="count-btn-icon"/> }
  </button>
    )
  }
