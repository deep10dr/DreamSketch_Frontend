import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Start from './pages/Start'
import Generation from './pages/Generator'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/generation' element={<Generation />} />
        <Route path='*' element={<Error />} />
        <Route  path="/about"  element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
