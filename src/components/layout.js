import React from "react"

import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import "typeface-fredoka-one"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-4 lg:p-16">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
