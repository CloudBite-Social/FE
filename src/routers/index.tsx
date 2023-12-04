import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ListPost from "@/pages/list-post";

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
      path: "/list-post",
      element: <ListPost />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
