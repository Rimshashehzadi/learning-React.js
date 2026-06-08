import React from 'react'
import Components from './Components'
import {Components2,name} from './Components'
import { Exercise01 } from './Exercise01'
import Function from './Function'
import States, { Number,Car,CarDetail } from './States'
import Toggle from './Toggle'

const App = () => {
  return (
    <div className='max-w-4xl mx-auto p-4'>
     <Components/>
     <Components2/>
     {/* <h2>{name}</h2> */}
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

export default App
