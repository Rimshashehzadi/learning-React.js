import React from 'react'

const Wrapper = ({children ,color='green'}) => {
  return (
    <div style={{color:color, border:'5px solid orange',width:'300px', margin:'10px'}}>
        {children}
    </div>
  )
}

export default Wrapper