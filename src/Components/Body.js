import React, { useEffect } from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {

  const dipatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dipatch(addUser({uid:uid,email:email,displayName:displayName}));
      } else {
        dipatch(removeUser());
      }
    });

  }, [])

  return (
    <div>

      
      <RouterProvider router={appRouter}>

        <Login />
      </RouterProvider>
    </div>
  )
}

export default Body
