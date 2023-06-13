import { useState } from "react"


const counter = () => {
    const[count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count + 1);
           
};
    const decrementcounter = () => {
    setCount(count - 1);
};
const reset = () =>{
    setCount(0)
};
    return (
       
<div>
    <h1 className = "componentHeading">Counter</h1>
    <p className = "countLabel">Count: {count}</p>
    <button className = "fancybutton" onClick={()=>incrementCounter()}>increment</button>
    <button className="fancybutton" onClick={()=>decrementcounter()}>>Decrement</button>
    <button className="fancybutton" onClick={()=>reset()}>Reset</button>
</div>
    )
}

export default counter;
