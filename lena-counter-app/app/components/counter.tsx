import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);

    };


    const decrementcounter = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0)
    };

    const countClass = () => {
        if (count > 0) {
            return "greater-than-zero";
        }
        else {
            return "less-than-zero";
        }
    }
    return (

        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className={countClass()}>Count: {count}</p>
            <button className="fancybutton" onClick={() => incrementCounter()}>Increment</button>
            <button className="fancybutton" onClick={() => decrementcounter()}>Decrement</button>
            <button className="fancybutton" onClick={() => reset()}>Reset</button>
        </div>
    )
}



export default Counter;
