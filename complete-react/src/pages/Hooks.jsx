import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '../Button'
const Hooks = () => {
    // let fruit = 'Apple'
    const [fruit, setFruit] = useState('Apple')
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
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
                {isVisible ? <h1 className="text-4xl font-bold">This is Toggle</h1> : null}
            </div>
            {/* header using toggle button */}
            <div className="flex justify-between items-center p-4 bg-amber-500 text-amber-50 rounded-2xl mt-4">
                <div>logo</div>
                <ul className='space-x-4 hidden md:flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="hidden md:flex">
                    {/* <button className="p-2 bg-amber-600 text-amber-50 rounded-2xl">log in</button> */}
                <button className="p-2.5 bg-amber-50 text-amber-600  text-xl rounded-2xl">log in</button>
                </div>
                {/* for mobile */}
                <div className="md:hidden">
                    <button>
                        {isOpen ? <RxCross2 className="text-4xl" onClick={() => setIsOpen(!isOpen)} />
                            : <RxHamburgerMenu className="text-4xl" onClick={() => setIsOpen(!isOpen)} />}
                    </button>



                </div>
               
            </div>
             {/* mobile menu */}
                {isOpen && (
                    <div className="md:hidden space-y-2 justify-between items-center p-4 bg-amber-500 mt-1.5 text-amber-50  rounded-2xl">
                        <ul className=" space-y-2 font-medium text-xl ">
                           <li>Home</li>
                           <li>About</li>
                           <li>Contact</li>
                        </ul>
                        
                             <button className="p-2.5 bg-amber-50 text-amber-600  text-xl rounded-2xl">log in</button>
                        

                    </div>
                )}

        </div>
    )
}
export default Hooks;