import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
import ProductDetails from "../Pages/ProductDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/signIn",
          element: <SignIn></SignIn>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/details",
          element: <ProductDetails></ProductDetails>,
        },
      ],
    },
  ]);