import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Check from "./Check";
import MovieCardDetails from "./MovieCardDetails";
import MoreInfo from "./MoreInfo";

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
      path:"/movie/:resId",
      element:<MovieCardDetails/>
    },
    {
      path:"/movie/moreinfo",
      element:<MoreInfo/>
    }
  ]);


  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
