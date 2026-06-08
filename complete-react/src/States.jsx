import React from 'react'
import { useState } from 'react'

const States = () => {
  const[fruit, setFruit] = useState('banana')
  const changeFruit = () => {
    setFruit('apple')
  // let fruit = 'banana'
  // const changeFruit = () => {
  //   fruit = 'apple'
  //   console.log(fruit)
  }
  return (
    <div>
      <h1>React States</h1>
      <h1>{fruit}</h1>
      <button className='bg-blue-500 text-white p-2 rounded' onClick={changeFruit}>Change Fruit</button>
    </div>
  )
}

export default States