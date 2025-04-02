import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout";
import Shop from "../pages/shop";
import Home from "../pages/home";
import ProductShop from "../pages/productShop";
import ProceedCheckout from "../pages/proceed-checkout";
import Blog from "../pages/blogs";
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
        path: "/shop/:category/:id",
        element: <Shop />,
      },
      {
        path: "/products-shop",
        element: <ProductShop />,
      },
      {
        path: "/proceed-checkout",
        element: <ProceedCheckout />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
