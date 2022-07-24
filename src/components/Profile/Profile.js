import { TextField } from '@material-ui/core'
import React from 'react'
import Header from '../Header/Header'

const Profile = () => {
  return (
    <div>
    <Header/>
    <div className="profile">
      <div className="profile-container">
      <div className="profile-container-heading">Complete your profile </div>
      <div className='profile-container-form'>
       <TextField type="date" />
        </div>
         </div>
        </div>
        </div>
  )
}

export default Profile
