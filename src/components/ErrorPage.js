import React from 'react'
import Header from './Header'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {


   const error = useRouteError();



  
  return (
    <>
     
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-red-500'>{error.statusText || error.message}</h1>
      </div>
    </>
  )
}

export default ErrorPage
