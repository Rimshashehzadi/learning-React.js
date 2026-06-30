import React from 'react'

const User = ({user}) => {
   
  return (
    <div>
        <hr/>
<h1>Name:{user.name}</h1>
<h1>Age:{user.age}</h1>
<h1>City:{user.city}</h1>

{/* <h1>{user.age}</h1> */}
    </div>
  )
}

export default User