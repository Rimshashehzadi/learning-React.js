import React, { useState } from 'react'

const RadioDropdown = () => {
  const [gender,setGender] = useState('female')
  const[city,setCity] = useState('Lahore')
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h2>Select Gender</h2>
      <input type='radio' onChange={(event => setGender(event.target.value))} name='gender' checked={gender=='male'} value='male' id='male'/>
      <label htmlFor='male'>Male</label>
      <input type='radio' onChange={(event) => setGender(event.target.value)} name='gender' checked={gender=='female'} value='female' id='female'/>
      <label htmlFor='female'>Female</label>
      <h1>Selected Gender: {gender} </h1>
      <br/><br/>
      <h1>Select City</h1>
      <select onChange={(event) =>setCity(event.target.value)} defaultValue={'lahore'}>
        <option value='sialkot'> Sialkot</option>
        <option value='islamabad'>Islamabad</option>
        <option value='karachi'>Karachi</option>
        <option value='lahore'>Lahore</option>
        <option value='sheikhupura'>Sheikhupura</option>
      </select>
      <h1>Selected City: {city}</h1>
    </div>
  )
}

export default RadioDropdown