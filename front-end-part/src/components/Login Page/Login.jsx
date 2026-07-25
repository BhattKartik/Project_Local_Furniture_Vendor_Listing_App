import React, { useState } from 'react'

const Login = () => {

  let [loginData, setLoginData] = useState({

    email: "",
    password: ""
  })


  function handleInputChange(event) {

    let { name, value } = event.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Login Data:", loginData)
    // Handle login logic here
  }

  return (

    <>

<form onSubmit = {handleSubmit}>

    <label>Email</label>
    <input type="email" id="email" name="email" value={loginData.email} required onChange = {handleInputChange} />

    <label>Password</label>
    <input type="password" id="password" name="password" value={loginData.password} required onChange = {handleInputChange} />

    <button type="submit">Login</button>
    
    </form>




    </>
  )
}

export default Login