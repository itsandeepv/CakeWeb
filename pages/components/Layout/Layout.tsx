import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Nevabar/Navbar'
 import styles from  "../../components/Layout/layout.module.css"


const Layout = ({children}) => {
  return   <Fragment >
     <Navbar/>
     {children}
     <Footer/>
  </Fragment>
}

export default Layout
