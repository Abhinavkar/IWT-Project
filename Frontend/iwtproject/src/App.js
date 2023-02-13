import React from 'react';
import {createdBrowserRouter, RouterProvider} from 'react-router-dom'

export default function App() {
  const router = createdBrowserRouter([

      {
        path : '/'
        element : <div> Root Route </div>
      }
  ])
  return (
 
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  

  )
}

