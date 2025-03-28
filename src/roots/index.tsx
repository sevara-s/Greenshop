import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout";
import Shop from "../pages/shop";

import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/shop/:category/:id",
        element:<Shop/>
      }
    ],
  },
]);
