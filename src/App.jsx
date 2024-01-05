import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Section1 } from './components/section1'
import { Section5 } from './components/section5'
import { Section4 } from './components/section4'
import { Section6 } from './components/section6'
import { FOOTER } from './components/FOOTER'
function App() {
  

  return (
    <>
    <Navbar/>
   <Section1 discount="30% OFF"/>
   <div className="container-fluid section2 mb-2">
   <img src="\src\assets\Screenshot 2024-01-03 035906.png"alt="" />
   </div>
  <Section4/>
  <Section5/>
  <Section6/>
  <FOOTER/>
    </>
  )
}

export default App
