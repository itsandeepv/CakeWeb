import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footerContainer}>



      <Container>
        <Row className="py-3">
          <Col lg="3" md="6">
            <div className={styles.footerItem}>
              <div>
                <span><h4>Know Us</h4></span>

                <span><h6> <Link href="#"> Contact  Us </Link></h6></span>
                <span><h6> <Link href="#"> Locate  Us </Link></h6></span>
                <span><h6> <Link href="#"> Our Story </Link></h6></span>
                <span><h6> <Link href="#"> Blog  </Link></h6></span>



              </div>
            </div>

          </Col>



          <Col lg="3" md="6">
            <div className={styles.footerItem}>
              <div>
                <span><h4>Need Help</h4></span>

                <span><h6> <Link href="#"> Cancellation and Refund </Link></h6></span>
                <span><h6> <Link href="#"> Privacy Policy
                </Link></h6></span>
                <span><h6> <Link href="#"> Terms and Conditions
                </Link></h6></span>
                <span><h6> <Link href="#"> Sitemap  </Link></h6></span>



              </div>
            </div>

          </Col>
          <Col lg="3" md="6">
            <div className={styles.footerItem}>
              <div>
                <span><h4>More Info
                </h4></span>

                <span><h6> <Link href="#"> Corporate Cakes
                </Link></h6></span>
                <span><h6> <Link href="#"> Coupons & Offers
                </Link></h6></span>
                <span><h6> <Link href="#"> Franchise </Link></h6></span>
                <span><h6> <Link href="#"> Download App  </Link></h6></span>



              </div>
            </div>

          </Col>
          <Col lg="3" md="6">
            <div className={styles.footerItem}>
              <div>
                <span><h4>Follow Us</h4></span>

                <ul className={styles.list}>

                  <li></li>
                </ul>


              </div>
            </div>

          </Col>


        </Row>


      </Container>

    </div>
  )
}

export default Footer