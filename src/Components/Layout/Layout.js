import React from 'react'
import Header from '../Header/Header'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout