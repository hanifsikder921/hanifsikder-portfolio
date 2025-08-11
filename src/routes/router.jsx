import { createBrowserRouter } from 'react-router';
import MainLayout from './../layouts/MainLayout';
import AuthencationLayout from './../layouts/AuthencationLayout';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import Home from '../pages/Home/Home/Home';
import ProjectDetails from '../pages/Home/LatestProject/ProjectDetails';


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'project/:id', 
        Component: ProjectDetails,
      },
    ],
  },

  {
    path: '/auth',
    Component: AuthencationLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login,
      },
      {
        path: '/auth/register',
        Component: Register,
      },
    ],
  },

 
  {
    path: '*',
    element: <h2 className="text-center mt-10">Page Not Found</h2>,
  },
]);

export default router;
