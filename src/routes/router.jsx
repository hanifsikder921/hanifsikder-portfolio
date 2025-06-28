import { createBrowserRouter } from "react-router";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home/Home";
import AuthencationLayout from './../layouts/AuthencationLayout';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import About from "../pages/About/About";
import ContactUs from "../pages/Contact/ContactUs";



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index:true,
                Component: Home,
            },
            {
                path:'/about',
                Component:About

            },
            {
                path:'/contact',
                Component:ContactUs

            }
            

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