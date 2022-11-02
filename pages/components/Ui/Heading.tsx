import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from "../../../styles/heading.module.css"
import Slider from "react-slick"
import img1 from "../../../public/image/template_10.png"
import img2 from "../../../public/image/template_11.png"
import img3 from "../../../public/image/template_7.png"
import img4 from "../../../public/image/template_8.png"
import Image from 'next/image'
import Categories from './Categories'


const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
}







const Heading = () => {
  return <div className={styles.headingContainer}>
    <Row>

      <Col>
        <Slider {...settings}>
          <div className={styles.slider}>


            <Image src={img1} alt="img" />

          </div>
          <div className={styles.slider}>


            <Image src={img2} alt="img" />

          </div>
          <div className={styles.slider}>


            <Image src={img3} alt="img" />

          </div>
          <div className={styles.slider}>


            <Image src={img4} alt="img" />

          </div>

        </Slider >
      </Col>

    </Row>
    <Row>








      <Col className="py-5">
        <div className="px-5 textcolor">
          <div className="d-flex justify-content-center">

            <h2>  BEST CAKE SHOPE IN THE TOWN</h2>
          </div>


          <div className="d-flex justify-content-center">

            <p className="text-justify">
              Chocolates
              Strawberry
              Pineapple
              Butterscotch
              Vanilla
              TOP CATEGORIES
              Birthday Cakes
              Anniversary Cakes
              Wedding Cakes
              Burger & Pizzas
              Spicy Fastfoods
              ABOUT US
              About Us
              Contact Us
              Privacy Policy
              Terms & Use
              Copyright

            </p>
          </div>

        </div>
      </Col>


    </Row>
    
    <Categories />

  </div>
}

export default Heading
