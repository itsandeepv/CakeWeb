import React from 'react'
import styles from "../../../styles/hero.module.css"
import Slider from "react-slick"
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import img1 from "../../../public/image/cake.jpg"
import img2 from "../../../public/image/cake2.jpg"


const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 1800,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}




const Hero = () => {

  const image = [
    "../../../public/image/cake.jpg",
    "../../../public/image/cake2.jpg",
    "../../../public/image/cake.jpg",
    "../../../public/image/cake2.jpg",
    "../../../public/image/cake.jpg",

  ];

  const num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]

  const data = [
    {
      name: "Barthday Cake",
      price: "23$",
      img:''
    }
    , {
      name: "Party Cake",
      price: "2$",
      img:'/image/cake.jpg'
    }
    , {
      name: "Aniversry Cake",
      price: "25$",
      img:'/image/cake.jpg'
    }
    , {
      name: "Wedding Cake",
      price: "25$",
      img:'/image/cake2.jpg'
    }



  ];

  console.log(data.map((vlu) => vlu));




  return (<section className={styles.hero_section}>

    <Row>

      <Slider {...settings}>
        {
          data.map((vlu, index) =>


            <Col lg="3" md="6" className="d-flex justify-content-center my-2" key={index}>
              <div className={styles.imgcontainer}>
                <div>
                  <div className={styles.hero_img} >
                    <div>

                      <Image src={vlu.img}  alt="londing img" width="250" height="250" />



                      <div>

                        <span>{vlu.name}</span>
                      </div>
                    </div>

                  </div>
                  <div>

                    <div className={styles.pricedev}>
                      <span>PRICE : {vlu.price} </span>
                      <span className={styles.selectbox} >Qunatity : <select>
                        <option value="select">select</option>
                        {
                          num.map((vlu ,index) =>

                            <option key={index}
                              value={vlu}>
                              {vlu} lbs</option>


                          )
                        }
                      </select>  </span>
                    </div>
                    <button className="primary_btn">Order Now</button>

                    <button > <i className="ri-shopping-cart-2-fill "></i>Add To Cart</button>

                  </div>



                </div>
              </div>

            </Col>

          )
        }

      </Slider>
    </Row>


  </section>
  )
}

export default Hero
