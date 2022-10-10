import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import PageTemplate from "../Templates/Page";
import Login from "../pages/Login";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={routers} />;
}

export default Router;
