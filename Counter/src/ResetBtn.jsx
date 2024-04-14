import { ResetIcon } from "@radix-ui/react-icons";

function ResetBtn({setCount}){
    return (
       
    <button onClick={
        (e) => {
            setCount(0);
            e.target.blur();
        }
    } className="reset-btn">
        <ResetIcon className="reset-btn-icon"/>
    </button>

    );
}

export default ResetBtn;