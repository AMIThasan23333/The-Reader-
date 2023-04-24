import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import About from "./About";
import Books from './Books';
import BookDetails from './BookDetails';



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
        },

        {
            path : '/books',
            element: <Books></Books>,
            loader : () => {
           return  fetch('https://api.itbook.store/1.0/new')
            }
         },

         {
            path : 'book/:id',
            element: <BookDetails></BookDetails>,
            loader : ({params}) => 
          fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            
         },

      ]
    },
  ])

  export default router;
