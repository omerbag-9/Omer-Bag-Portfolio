import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
      <>
         <div className="container">
         <div className='py-5 row justify-content-center mx-4 p-mobile'>
      <div className="col-md-2 dark-color rounded-4 border-main">
      <SideBar/>
      </div>
      <div className="col-md-10 experience ps-4">
      <Outlet/>
      </div>
    </div>
    <Footer/>
         </div>

    </>
  )
}
