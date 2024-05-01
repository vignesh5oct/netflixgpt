import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';





const Browse = () => {


  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });

  }




  return (
    <div className='flex justify-end'>
      <img alt='userlog' src=""></img>
      <h1 className='cursor-pointer' onClick={handleSignOut}>(sign out)</h1>
    </div>

  )
}

export default Browse
