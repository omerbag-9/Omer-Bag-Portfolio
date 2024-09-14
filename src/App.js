import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Layout from './Components/Layout/Layout'

const router = createBrowserRouter([
  {path:"",
  element:<Layout/>,
  children:[
    {index:true,element:<Home/>},
    {path:"projects",element:<Projects/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contacts/>},
  ]}
])


export default function () {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
