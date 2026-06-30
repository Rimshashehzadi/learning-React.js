import React from 'react'
import Wrapper from './Wrapper'

const Custom = ({name}) => {
  return (
    <div>
        {/* <h1>{name}</h1> */}
        <Wrapper>
            <h1>Helo Everyone</h1>
        </Wrapper>
        <Wrapper>
            <h1  style={{color:'blue'}}>Helolo Admin</h1>
        </Wrapper>
    
    </div>
  )
}

export default Custom