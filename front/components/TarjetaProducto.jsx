import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import Button from "react-bootstrap/Button";
// importando iconos de las librerias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
// importando componentes de react-bootstrap para la grilla
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TarjetaProducto = function ({ product, handleClick }) {
  const precio = {
    fontSize : "20pt",
    marginBottom: "0rem"
  }
  const comprar = {
    marginBottom: "0.5rem",
    padding: "1.5rem",
    // float : 'left'
  }

  const card = {
    width:"15rem",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',
    borderRadius: "0px",
  }

  const name = {
    whiteSpace: "nowrap",
    overflowX: "hidden",
    overflowY : 'hidden',

  }
  
  return (
    <div key={product.id}>
      <Card style={ card }>
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={product.imgUrl} />
        </Link>
        <Card.Body>
          <Row>
            <Col >
              <Link to={`/products/${product.id}`} >
                <Card.Title style={name}>{product.name}</Card.Title>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Rating
                style={{marginBottom: ".75rem"}}
                initialRating={product.rating} emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                fullSymbol={<FontAwesomeIcon icon={fullStar} />} readonly />
            </Col>
          </Row>
          <Row>
            <Col md={7} style={{height:"3rem"}}>
              <Card.Title style={precio}>${product.price}</Card.Title>
            </Col>
            <Col md={3} style={{height:"3rem"}}>
              <span style={comprar}>
              <Button variant="dark" onClick={() => 
                handleClick(product.id, 1, product.name, product.price, product.stock, product.imgUrl)} >
                  {<FontAwesomeIcon fontSize="md" icon={faCartPlus} />}</Button>
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default TarjetaProducto;


