import React from 'react'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';


const router = createBrowserRouter([


  {

    path : '/',

    element: <Home></Home>
  },

  {

    path : '/home',

    element: <Home></Home>
  }


])

function App() {
  return (

    <div>
       <Header></Header>

       <RouterProvider router={router}></RouterProvider>
    </div>


  )
}

export default App
