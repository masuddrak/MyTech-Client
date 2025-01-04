import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
import ProductDetails from "../Pages/ProductDetails";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import axios from "axios";
import AddPost from "../TrnastackQuery/AddPost";

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
        loader: () => axios(`${import.meta.env.VITE_API_URL}/totalProduct`),
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
        path: "/details/:name",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "addpost",
        element: <AddPost></AddPost>,
      },
    ],
  },
]);
