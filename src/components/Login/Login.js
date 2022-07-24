import React from 'react'
import {Link } from 'react-router-dom'
// import { TextField } from '@material-ui/core'
import "./Login.scss"
import "../Design/_common.scss" 
import "../Design/_flex.scss" 
import TextField from '@material-ui/core/TextField';




const Login = () => {
  return (
    <div>
    <div className='login-flexbox'>
    <div className='login-container flexbox flex-col'>
    <div className='login-container-heading'> Login </div>
    <div className='login-container-form flex flex-col'>

    <TextField
      type="email"
      placeholder="Enter email address"
    />

    <TextField
      type="password"
      placeholder="Enter password"
    />

    <button classname="btn-form">
      <Link to = "/home">Login</Link>
    </button>

    </div>
      <div>
      <Link className="link-text" to="/signup">Not having an account !! signup here</Link>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Login
