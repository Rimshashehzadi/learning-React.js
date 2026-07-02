import React from 'react'
import { useState, useEffect } from 'react'
const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    function onceCalled() {

        console.log("This function is called only once when the component is mounted.")

    }
    useEffect(() => {
        // onceCalled()
        counterUpdate();
    },[count,data])
    function counterUpdate() {

        console.log('counterFunction is called when the count state is updated.', count)

    }
    
    return (
        <div>
            <h1>UseEffect</h1>
            <p>This is a simple example of using the useEffect hook in React.</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className='bg-blue-600 text-amber-50 p-3'>Click Me</button>
            <p>Data: {data}</p>
            <button onClick={() => setData(data + 1)} className='bg-green-600 text-amber-50 p-3'>Update Data</button>


        </div>
    )
}

export default UseEffect