import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import MainLayout from "../components/main-layout";
import ProductsShop from "../pages/products-shop";
import ProceedCheckout from "../pages/proceed-checkout";
import Blogs from "../pages/blogs";
import Profile from "../pages/profile";
import { path_profile } from "../utils";
import UserPostBlog from "../components/blog/blog-userPost";
import User from "../pages/user";

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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/shop/:category/:id",
        element: <Shop />,
      },
      {
        path: "/products-shop",
        element: <ProductsShop />,
      },
      {
        path: "/proceed-checkout",
        element: <ProceedCheckout />,
      },
      {
        path: "/blog/:id/:user_id",
        element: <UserPostBlog />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: path_profile.map(({ path, Components }) => ({
          path: `${path}`,
          element: <Components />,
        })),
      },
      {
        path: "/user/:post_user_id",
        element: <User />,
    },
    ],
  },
]);
