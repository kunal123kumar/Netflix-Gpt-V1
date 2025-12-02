import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browser from "./Browser";
import MoviePage from "./MoviePage";




const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/movies/:type",
      element: <MoviePage />,
    }
  ]);


  return <RouterProvider router={appRouter} />;
};

export default Body;
