import { createBrowserRouter } from "react-router";
import MainLayout from './../layouts/MainLayout';
import AuthencationLayout from './../layouts/AuthencationLayout';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';

import Home from "../pages/Home/Home/Home";



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index:true,
                Component: Home,
            },
            
           
            

        ]
    },

    {
        path:"/auth",
        Component:AuthencationLayout,
        children:[
            {
                path:"/auth/login",
                Component:Login
            },
            {
                path:"/auth/register",
                Component:Register
            }
        ]
    }

])



export default router;