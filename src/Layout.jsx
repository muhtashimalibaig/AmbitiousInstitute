import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Loader from './Components/Loader/Loader'
function Layout() {
  return (
    <>
    {/* <Loader/> */}
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
