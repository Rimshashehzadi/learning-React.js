import React from 'react'
import { useState,useEffect } from 'react'

const ClockTask = ({ color }) => {
    const [time,setTime] =useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000);
    },[])
  return (
    <div>
        <h1>Default props in React</h1>
        <h1 style={{color:color ,background:'lightgray',padding:'10px', width:'120px'}}>{time}</h1>


    </div>
  )
}

export default ClockTask