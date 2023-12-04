import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import Profie from "@/pages/profiles";
import EditProfile from "@/pages/profiles/edit-profile";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <Profie />,
    },
    {
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
