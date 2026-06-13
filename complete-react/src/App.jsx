import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
