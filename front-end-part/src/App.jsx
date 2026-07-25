import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login Page/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Home Page/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/home" element = {<HomePage />} />

    </Routes>
    
    
    
    </BrowserRouter>

    
    <Login />


     
    </>
  )
}

export default App
