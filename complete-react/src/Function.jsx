import React from 'react'
 function name3(name0) {
        alert(name0)

    }
const Function = () => {
    function name(name1) {
        alert(name1)

    }
    return (
        <div>
            <br/>
            <h1>Onclick Function call</h1>
            <br />
            <button className='p-4 bg-indigo-500 text-amber-50 rounded-2xl' onClick={() => name('onclick01')}>Onclick01</button>
            <br />
            <br/>
            <button className='p-4 bg-indigo-500 text-amber-50 rounded-2xl' onClick={() => name3('onclick02')}>Onclick02</button>
        </div>
    )
}

export default Function