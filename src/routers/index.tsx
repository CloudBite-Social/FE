import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
