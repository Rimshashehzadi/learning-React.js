import React from "react";
import { useState } from "react";
import Button from '../Button'
const Hooks = () => {
    // let fruit = 'Apple'
    const [fruit, setFruit] = useState('Apple')
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const updateFruit = () => {
        // fruit = 'MANGO'
        // console.log(fruit)
        setFruit('MANGO,Banana')
    }
    return (
        <div>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">This is Hook page</h1>
                <h2>Fruit :{fruit}</h2>
            </div>
            <div className="mt-4">
                {/* <Button text={'update state'} onClick={updateFruit}/> */}
                <button className="p-6 bg-amber-600 text-amber-50 rounded-2xl" onClick={updateFruit}>Update State</button>
            </div>
            <div className="mt-4 space-y-4">
                <h1>Count: {count}</h1>
                <div className="space-x-4">
                    <button className="p-6 bg-amber-600 text-amber-50 rounded-2xl" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="p-6 bg-amber-600 text-amber-50 rounded-2xl" onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
            {/* TOGGLE (HIDE AND SHOW) */}
            <div className="mt-4 space-y-4">
                <h1>Toggle</h1>
               
                <button className="p-6 bg-amber-600 text-amber-50 rounded-2xl" onClick={() => setIsVisible(!isVisible)}>Toggle</button>
                 {isVisible? <h1 className="text-4xl font-bold">This is Toggle</h1> : null}
                </div>
        </div>
    )
}
export default Hooks;