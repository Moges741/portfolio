import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Tools from './pages/Tools'
import Projects from './components/Projects'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Tools/>
    <Projects/>
     
    </>
  )
}

export default App
