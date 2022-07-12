import React from 'react'
import Navigation from './home/Navigation'
import Footer from './home/Footer'
import Botnav from './home/BottomNav'
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
      <Botnav/>
    </div>
  )
}

export default Layout
