
import {
  createBrowserRouter,
  
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/Authentication/login/Login";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Register from "../pages/Authentication/register/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
    {
    path: "/",
    Component: AuthenticationLayout,
    children: [
        {
            path: "login" ,
            Component: Login
        },
        {
          path: 'register',
          Component: Register
        }
    ]
  },
]);