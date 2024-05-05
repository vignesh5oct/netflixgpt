import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import SearchButton from './SearchButton'


const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "/browse/search",
          element: <SearchButton />
        },
      ],
    },
  ])



  return (
    <div>

      <RouterProvider router={appRouter} />
      {/* <div className=''>
        <img className='w-full h-screen' src={LOGIN_BG} alt='bg'></img>
      </div> */}
    </div>
  )
}

export default Body
