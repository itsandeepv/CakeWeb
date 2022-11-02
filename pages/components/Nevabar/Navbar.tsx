import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "../../components/Nevabar/navbar.module.css"
import img1 from "../../../public/image/david-holifield-kPxsqUGneXQ-unsplash.jpg"
import Link from 'next/link'

const Navbar = () => {
  return <section >
    <Row className="py-1">
      <div className={styles.navbar_container} >
        <div className={styles.item}>
          <div className={styles.callButton}>
          <Link href="#">
            <i className="ri-phone-line"></i> 
            </Link>
          </div>
          <div className={styles.texts}>

          <div className={styles.texts}>
          <Link href="#">  ORDER NOW </Link>
          </div>
          <div className={styles.texts}>
            +9-0898989
          </div>
          </div>    

          </div>

        <div className={styles.menu}>
<ul className={styles.list}>
  <li className={styles.listItem} >  <Link href="#"> Home</Link> </li>
  <li className={styles.listItem} > <Link href="#"> Product</Link></li>
  <li className={styles.listItem} > <Link href="#"> Menu</Link></li>
  <li className={styles.listItem} > <span>Cake<b>House</b></span></li>


  <li className={styles.listItem} > <Link href="#"> Events</Link></li>
  <li className={styles.listItem} > <Link href="#"> Contact</Link></li>
  <li className={styles.listItem} > <Link href="#"> Blog</Link></li>

  </ul>   
  
       </div>
        <div className={styles.item}>
        <div className={styles.cart}>
       <span>
        <Link href="#">
        
                 <i className="ri-shopping-cart-line"></i>
                 </Link>
          </span>
    <p className={styles.counter}>2</p>
            </div>
        </div>

      </div>
    </Row>



  </section>
}

export default Navbar