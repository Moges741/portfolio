import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Tools from './pages/Tools'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tools/>
     
    </>
  )
}

export default App
