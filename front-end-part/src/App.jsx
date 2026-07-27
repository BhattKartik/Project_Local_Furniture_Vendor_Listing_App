import { useState } from 'react'
import './App.css'
import Login from './components/Login_Page/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Home_Page/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    
    
    
    </BrowserRouter>

    
    


     
    </>
  )
}

export default App
