import React, { useState, useRef } from 'react'
import { checkValidate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from './Header';
import { bg } from '../utils/constants';

const Login = () => {
  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState(true);

  const [errMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);


  const handleForm = () => {
    setSignInForm(!signInForm);
  }

  const handleValidation = () => {
    const message = checkValidate(email.current.value, password.current.value);
    // console.log(email);
    setErrorMessage(message);

    if (message) return;

    if (!signInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value, fullName.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user,
            {
              displayName: fullName.current.value
            }).then(() => {
              console.log(user);
              const { displayName } = auth.currentUser;
              dispatch(addUser({ displayName: displayName }));
              console.log(user);

            }).catch((error) => {
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);

        });

    }

  }


  return (

    <div>
      <Header />
      <div className='absolute'>
        <img src={bg} alt='bg'></img>
      </div>

      <form className='px-10 py-12 w-3/12 absolute bg-black my-36 mx-auto right-0 left-0 bg-opacity-70 rounded-lg' onClick={(e) => { e.preventDefault() }}>

        <h1 className='font-bold my-3 text-3xl p-2 text-white'> {signInForm ? "Sign In" : "Sign Up"}</h1>

        {!signInForm &&
          <input ref={fullName} className='p-2 m-2 w-full bg-gray-700' type='text' placeholder='Fullname'></input>}

        <input className='p-2 m-2 my-3 w-full bg-gray-700' ref={email} type='email' placeholder='Email'></input>
        <input className='p-2 m-2 my-3 w-full bg-gray-700' ref={password} type='password' placeholder='Password'></input>

        <button className='p-2 mx-2 my-3 bg-red-700 rounded-md font-medium text-white' onClick={handleValidation}>
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='mx-2 m-3 text-red-600'>{errMessage}</p>
        <p className='mx-2 m-4 cursor-pointer text-white' onClick={handleForm}>New to Netflix?Signup Now</p>
      </form>

    </div>

  )
}

export default Login
