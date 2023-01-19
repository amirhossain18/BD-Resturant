import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Header/Main/Main";
import About from "../Pages/About/About";
import Count from "../Pages/Count/Count";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const router= createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/count',
                element:<Count/>
            },
            {
                path:'/login',
                element:<Login/>
            }
            
        ]
    },
   

])