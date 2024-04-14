export default function Count({count}){

    //first way
    // const number = props.number;
    // const size = props.size;

    //second way
    // const {number, size} = props;
     
    return (
        <p className="count">{count}</p>
    );
}
