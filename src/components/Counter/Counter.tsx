import { useState } from "react";
import "./Counter.scss"

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        if (counter > 0){
            setCounter(counter -1)
        }
    }

    return (
        <section className="counter">
            <h2 className="counter__title">Counter</h2>
            <p className="counter__tracker">{counter}</p>
            <button className="counter__decrement" onClick={handleDecrement}>-</button>
            <button className="counter__increment" onClick={handleIncrement}>+</button>
        </section>
    );
};