import React from 'react'

const College = ({data}) => {
    // console.log(names)
  return (
    <div>
        <h1>College</h1>
        <h1>{data[0]}</h1>
         <h1>{data[1]}</h1>
        <h1>{data[2]}</h1> 
        <h1>{data[3]}</h1>


    </div>
  )
}

export default College