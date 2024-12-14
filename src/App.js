import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import AppLayout from './Component/AppLayout';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<NotFound/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/gallery',
          element:<Gallery/>
        },
        {
          path:'/services',
          element:<Service/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<Signup/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;

}

export default App