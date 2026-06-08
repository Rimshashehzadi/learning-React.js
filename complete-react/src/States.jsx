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

// states useState hook is used to manage state in functional components. It allows you to create a state variable and a function to update that variable. In the example above, we have a state variable called 'fruit' initialized to 'banana'. When the button is clicked, the 'changeFruit' function is called, which updates the 'fruit' state to 'apple'. This causes the component to re-render and display the updated fruit name.
export const Number = () => {
  const[count,setcount] = useState(0)
  const [number ,setNumber] = useState(10)
  return (
  <div>
    <h1> Increment :{count}</h1>
    <button className='bg-green-500 text-white p-2 rounded' onClick={()=>{setcount(count+1)}}>increment</button>
  <h1> Decrement :{number}</h1>
  <button className='bg-red-500 text-white p-2 rounded' onClick={() =>{setNumber(number-1)}}>Decrement</button>
  </div>
  )
}

export const Car = () => {
  const[color, setColor] = useState('red')
  const[model, setModel] = useState('BMW')
  const[year, setYear] = useState(2020)
  const[price, setPrice] = useState(50000)
  return(
    <div>
      <h1> Car color is {color}</h1>
      <h1>Car model is {model}</h1>
      <h1>Car year is {year}</h1>
      <h1>Car price is {price}</h1>
      <button className='bg-yellow-500 text-white p-2 rounded' onClick={() =>{setColor('blue'); setModel('Audi'); setYear(2021); setPrice(60000)}}>Change Car Details</button>
    </div>
  )
}
export const CarDetail = () => {
  const[car,setCar] = useState(
    {
      color:'red',
      model:'BMW',
      year:'2020',
      price:'50000'
    }
  )
  return(
    <div>
      <h1> Car color is {car.color}</h1>
      <button className='bg-yellow-500 text-white p-2 rounded' onClick={() => {setCar({...car,color: 'blue'})}}>Car color</button>
      <h1>Car model is {car.model}</h1>
      <button className='bg-purple-500 text-white p-2 rounded' onClick={() => {setCar({...car, model: 'Audi'})}}>Carmodel is</button>
    <h1>Car year is {car.year}</h1>
    <button className='bg-green-500 text-white p-2 rounded'  onClick={()=>{setCar({...car, year:'2022'})}}>Car year</button>
    <h1>Car price is {car.price}</h1>
    <button className='bg-blue-500 text-white p-2 rounded' onClick={()=>{setCar({...car,price:'80000'})}}>Car price</button>
    
    </div>

  )

}