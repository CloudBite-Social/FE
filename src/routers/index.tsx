import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages";
import ListPost from "@/pages/list-post";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
