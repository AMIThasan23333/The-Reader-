import React from 'react'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Roots from './components/Roots';


const router = createBrowserRouter([


  {

    path : '/',
    element: <Roots></Roots>,
    errorElement : <ErrorPage></ErrorPage>, 

    children : [

      {
        path : '/',
        element: <Home></Home>
      },
      {
        path : '/home',
        element: <Home></Home>
      },

      {
        path : '/about',
        element: <About></About>
      }
    ]
  },
])

function App() {
  return (

    <div>
    

       <RouterProvider router={router}></RouterProvider>
    </div>


  )
}

export default App
