import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MainNavbar from './MainNavbar'

const MainLayout = () => {
  return (
    <>
      <MainNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
