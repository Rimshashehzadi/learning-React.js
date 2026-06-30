import React, { useState } from 'react'
import User from '../User' 
import College from '../College'
import Student from '../Student'
import Custom from '../Custom'

const Contact = () => {
  //  let name = 'USMAN';
  //   let age = 24;
  //   let city = 'sheikhupura';
  let userObject ={
    name:'Ali',
    age:'24',
    city:'Lahore'
  }
  let userObject2 = {
    name:'Rimsha',
    age:'26',
    city:'Sheikhupura'

  }
  let userObject3 = {
    name:'BILAL',
    age: '35',
    city:' islamabad'
  }
  let collegeName=['EEFT','IIIT','IET' ,'IIIIT']
  const [name,setname] = useState()
  
  return (
    <div>
      <h1>Props in React</h1>
      <User user = {userObject}/>
      <User user = {userObject2}/>
      <User user = {userObject3}/>
      <College data= {collegeName}/>
      {name && <Student name = {name}/> }
      <button onClick={()=> setname('Bilal')} className='p-4 bg-blue-500 text-white'>click for change name</button>
    <Custom name =' r imsha'/>
    {/* <Custom name= 'Ali'/> */}
    </div>
  )
}

export default Contact