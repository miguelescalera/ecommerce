import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
//rating
import Rating from 'react-rating'
//iconos 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import Reviews from "../components/Reviews"
import Carousel from 'react-bootstrap/Carousel'


export default ({ selectedProduct }) => {
  console.log(selectedProduct)
  const colDesc = {
    float: "left",
    verticalAlign: 'middle'
  }
  const styleImg = {
    float: "right",
    height: '80%',
    paddingTop: '3rem',
    width: '100%' , 
    paddingBlockEnd: '3.5rem'
    
  }
  const comprar = {
    marginBottom: "0.5rem",
    padding: "0.5rem",
    width: '5rem',
    height: '3rem'
    // float:'left'
  }

  const containerGralStyles = { 
    alignContent: 'center',  
    flexDirection:'column',
    alignItems:'center'
  }

  const itemCardStyles  = { 
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)", 
    marginBlockEnd:'25px',
    marginBlockStart:'25px',
    alignItems:'center',
    width:'42rem',
    overflow:'scroll',
  }
  const reviewDeckCardStyles  = { 
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)", 
    marginBlockEnd:'25px',
    marginBlockStart:'25px',
    alignItems:'flex-start',
    width:'42rem',
    overflow:'scroll',
    backgroundColor:'#f2f2f2'
  }
  console.log('REREVIEEEEEEWA', selectedProduct.Reviews)

  return (
    <div>


    <Container className="d-flex justify-content-center" style={containerGralStyles}>
      <Card style={itemCardStyles}>
        <Row style={{width:'100%', alignItems:'center', paddingBlockEnd:'3rem'}} >
          <Col md={6}>
            <img src={selectedProduct.imgUrl} alt="Foto del producto" style={styleImg} />
          </Col>
          <Col md={5} style={colDesc}>
            <Container style={{ paddingTop: "10%" }}>
              <h1>{selectedProduct.name}</h1>
              <h5>Categorías: {selectedProduct.Categories? selectedProduct.Categories.map(category => category.name).join("• "): "-"}</h5>
              <h5>Bodega: {selectedProduct.Brand? selectedProduct.Brand.name: "-"}</h5>
              <p>{selectedProduct.description}</p>
              <Rating
                style={{ marginBottom: ".75rem" }}
                initialRating={selectedProduct.rating} emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                fullSymbol={<FontAwesomeIcon icon={fullStar} />} readonly />
              <Row>
                <Col md={8} >
                  <h2>${selectedProduct.price}</h2>
                </Col>
                <Col md={2}  >
                  <span  >
                    <Button style={comprar} variant="dark" >{<FontAwesomeIcon size="lg" icon={faCartPlus} />}</Button>
                  </span>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Card>
      <h3 >Reviews</h3>

      <Card style={reviewDeckCardStyles}>
         
         {/* <Container style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', overflow:'scroll'}} > */}

          {
            
            selectedProduct.Reviews ? (selectedProduct.Reviews.length ? <Reviews reviews={selectedProduct.Reviews}/> : <p> Aun no hay reviews de este producto, comprá uno y se el primero</p>  ) : null
          }
          {/* </Container > */}
      </Card>

    </Container>

    </div>
  );
};