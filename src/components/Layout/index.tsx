import * as React from "react"
import Footer from "../Footer"
import Navbar from "../Navbar"
import "./layout.css"

interface Props {
  children: JSX.Element[]
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
