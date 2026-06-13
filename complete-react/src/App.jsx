import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Hooks from './hooks/Hooks'
// import Statee from './hooks/Hooks'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'

const App = () => {
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<Hooks />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/statee" element={<Statee />} /> */}
      </Routes>
    </div>
  )
}

export default App
