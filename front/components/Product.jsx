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
export default ({ selectedProduct }) => {
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
  return (
    <Container className="d-flex justify-content-center" style={{ alignContent: 'center' }}>
      <Card style={{ boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)", paddingBlockend: '3.5rem' }}>
        <Row style={{width:'850px',alignItems:'center'}} >
          <Col md={6}>
            <img src={selectedProduct.imgUrl} alt="Foto del producto" style={styleImg} />
          </Col>
          <Col md={5} style={colDesc}>
            <Container style={{ paddingTop: "10%" }}>
              <h1>{selectedProduct.name}</h1>
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
    </Container>
  );
};