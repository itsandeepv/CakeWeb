import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../../../styles/heading.module.css"
import img1 from "../../../public/image/david-holifield-kPxsqUGneXQ-unsplash.jpg"


const Categories = () => {


const categories = [
  {
    category : "Wedding Cake",
    img :"/image/david-holifield-kPxsqUGneXQ-unsplash.jpg"
  },
  {
    category : "Barthday Cake",
    img :"/image/david-holifield-kPxsqUGneXQ-unsplash.jpg"
  },
  {
    category : "Aniversery Cake",
    img :"/image/david-holifield-kPxsqUGneXQ-unsplash.jpg"
  },
  {
    category : "Party Cake",
    img :"/image/swapnil-dwivedi-Nl8Oa6ZuNcA-unsplash.jpg"
  },
  
]



console.log(categories)






  return (
    <div className={styles.categoryConatiner}>
      <Container>

        <Row>
          <Col className="d-flex justify-content-center">
            <div>

              <span><h2>CHOOSE YOUR CATEGORY</h2></span>

            </div>
          </Col>

        </Row>
        <Row className="my-2">
        
{
  categories.map((vlu)=>(
    <>
  
         
          <Col lg="3" md="4">
            <div className="d-flex justify-content-center my-2">
            <div className={styles.catItem}>

              
              <div>
           <Link href="#"> 
               <Image src={vlu.img} alt={vlu.category} width="250" height="250" />
           </Link>
              </div>

              <div>
                <span> <button><Link href="#">{vlu.category}</Link></button></span>
              </div>

              </div>

            </div>
          </Col>
          </>
  ))
}
 

        </Row>


      </Container>





    </div>
  )
}

export default Categories
