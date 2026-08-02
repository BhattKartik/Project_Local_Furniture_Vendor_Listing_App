import './App.css'
import Login from './components/Login_Page/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Home_Page/HomePage'
import BrowserVendor from './components/Borwser-Vendor/BrowserVendor'

function App() {
  

  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/browse-vendors" element={<BrowserVendor />} />

    </Routes>
    
    
    
    </BrowserRouter>

    
    


     
    </>
  )
}

export default App
