import { useState } from "react"


const counter = () => {
    const[count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count + 1);
           
}
    return (
       
<div>
    <h1 className = "componentHeading">Counter</h1>
    <p className = "countLabel">Count: {count}</p>
    <button className = "Fancy Button" onClick={()=>incrementCounter()}>increment</button>
    <button className="Fancy Button">Decrement</button>
    <button className="Fancy Button">Reset</button>
</div>
    )
}

export default counter;
