import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>


    <nav className='flex justify-evenly bg-[#D7D5DB] pt-[20px] '>


    
      <Link to="/">LOGO</Link>
      <Link to="/" className='text-[#004AC6]'>FurniMarket</Link>

    
      

     <span>Search Bar</span>

      <ul className='flex gap-7'>

        <li><Link className='text-[#4A4D5C]'>Browse Vendors</Link></li>
        <li><Link className='text-[#4A4D5C]'>Categories</Link></li>
        <li><Link>How it Works</Link></li>
        <li><Link className='text-[#004AC6]'>Login</Link></li>
        
        
      </ul>

      <button className='bg-[#004AC6] text-white' >SignUp</button>




    </nav>



    <h1>Welcome to the Home Page</h1>
    
    
    
    
    </>
  )
}

export default HomePage