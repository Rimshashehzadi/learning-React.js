import React from 'react'
// import ClockTask from './ClockTask'


const Map2 = ({ data }) => {
  return (
    <div>
      <div key={data.id} className="border border-black px-4 py-2">
        <h1>Name: {data.name}</h1>
        <p>Age: {data.age}</p>
        <p>City: {data.city}</p>
      </div>
      {/* <ClockTask/> */}
    </div>
  )
}

export default Map2