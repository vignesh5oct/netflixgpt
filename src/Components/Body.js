import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Check from "./Check";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"watch",
      element:<Check/>,
    }
  ]);


  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
