import React from 'react'
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Roots from './components/Roots';
import router from './components/Routes';




function App() {

  return (

    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>


  )
}

export default App
