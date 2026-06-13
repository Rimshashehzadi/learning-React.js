import React from 'react'
import Components, { Components2 } from '../Components'
import { Exercise01 } from '../Exercise01'
import Function from '../Function'
import States, { Car, CarDetail, Number } from '../States'
import Toggle from '../Toggle'
import Header from '../Header'

const Home = () => {
  return (
    <div>
        <Header/>
        <Components/>
        <Components2/>
        <Exercise01/>
        <Function/>
        <States/>
        <Number/>
        <Car/>
        <CarDetail/>
        <Toggle/>
    </div>
  )
}
export default Home