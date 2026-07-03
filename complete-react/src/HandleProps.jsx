import React from 'react'
import { useState, useEffect } from 'react'

const HandleProps = ({counter, data1}) => {
    const handleCount = () => {
        console.log('This is a simple example of handling props in React.', counter)
    }
     const handleData = () => {
        console.log('This is a simple example of handling props in React.', data1)
    }
    useEffect(() => {
        handleCount();
        // handleData();
    }, [])   
    // handleCount();
    // handleData();
    useEffect(() => {
        handleData();
    }, [data1])
  return (
    <div>
        <h1>HandleProps</h1>
        <p>This is a simple example of handling props in React.</p>
        <h2>Counter : {counter}</h2>
        <h2>Data: {data1}</h2>
        
    </div>
  )
}

export default HandleProps