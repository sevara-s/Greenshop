import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout";

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
    ],
  },
]);
