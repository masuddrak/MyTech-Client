import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
import ProductDetails from "../Pages/ProductDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import axios from "axios";

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
          path: "/shop",
          element: <Shop></Shop>,
          loader:()=>axios("http://localhost:5000/totalProduct")
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