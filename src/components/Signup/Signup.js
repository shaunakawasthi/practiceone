import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button,Textfield } from '@material-ui/core'
import  {useReducer} from 'react'
import {Link} from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Signup.scss'
import { validateMobile } from '../validations'
import "../Design/_common.scss"
import "../Design/_flex.scss"



const Signup = () => {

const reducer = (state , newState) => ({ ...state, ...newState});
const[userData, setUserData] =useReducer(reducer, {
fullName : '',
email: '',
mobile:'',
password:'',
});

const[userError ,setUserError]= useReducer(reducer , {
fullNameError: false,
emailError : false,
mobileError: false,
passwordError:false,
});

const onChange =(e) => {
if(e.target.name==='fullName' && e.target.value.length>=3){
setUserError({fullNameError: false})
}

if(e.target.name==='password' && e.target.value.length >=8)
{
  setUserError({passwordError:false})
}
setUserData({[e.target.name]: e.target.value})

}
const handleRegister =(e) =>{

  e.preventDefault()

  if(!userData.fullName || userData.fullName.length < 3)
  setUserError({fullNameError: true})
  
  if(!userData.password || userData.password.length < 8)
  setUserError({passwordError: true})

  if(!userData.email || userData.email.length < 8)
  setUserError({emailError: true})


  if(!userData.mobile || validateMobile(userData.mobile))
  toast.error('mob no is not valid',{

    position: "top-right",
    autoClose : 5000,
    closeOnClick:true,
    pauseOnHover:true,
  });
}





  return (
    <>
    <div className='signup flexbox'>
      <div className='signup-container flexbox flex-col'>
        <div className='signup-container-heading'>Signup here!</div>
        <div className='signup-container-form flex flex-col'>
         
          <TextField
          type="text"
          placeholder="enter full name"
          name="fullName"
          onChange={onChange}
          error={userError.fullNameError}
          helperText={userError.fullNameError && "follow condition-min characters 3"}
          />

          <TextField
          type="email"
          placeholder="enter email"
          name="email"
          onChange={onChange}
          error={userError.emailError}
          helperText={userError.emailError && "follow condition-min characters 3"}
          />

        <TextField
          type="password"
          placeholder="enter password"
          name="password"
          onChange={onChange}
          error={userError.passwordError}
          helperText={userError.passwordError && "follow condition-8 characters minimimum"}
          />

        <TextField
          type="tel"
          placeholder="enter mob-no"
          name="mobile"
          onChange={onChange}
          error={userError.mobileError}
          helperText={userError.mobileError && "follow condition-10 characters minimimum"}
          />

          <button onClick={handleRegister} className="btn-form">
            Register
          </button>
          </div>
          <div>
        <button> <Link className='link-text' to ="/">Login</Link></button> 
          </div>
          </div>

          <ToastContainer

          position= "top-right"
          autoClose={5000}
          />
         </div>
      </>
  )
}

export default Signup
