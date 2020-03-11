import React from "react";
// import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { element } from "prop-types";
import Alert from "react-bootstrap/Alert";

let hardcodeada = [
  {
    name: "pepe",
    precio: 200
  },
  {
    name: "hola",
    precio: 300
  },
  {
    name: "chau",
    precio: 400
  },
  {
    name: "carlos",
    precio: 1000
  }
];

let total = 0;

export default ({ products, order }) => {
  return (
    <div style={{ marginTop: "120px" }}>
      <div className='Table striped bordered hover size="sm"'>
        <thead>
          <th>Resumen De Compra</th>
        </thead>
        {products
          ? products.map(Element => {
              total = total + Element.totalPrice;
              return (
                <tbody>
                  <tr>
                    <td>{Element.name}</td>
                    <td>${Element.totalPrice}</td>
                  </tr>
                  <hr />
                </tbody>
              );
            })
          : null}
        <td>Total</td>
        <td>${order.subTotal}</td>
        <hr />
        <Button variant="outline-dark">
          <Link to="/products"> Seguir comprando </Link>
        </Button>
        <Button style={{ marginLeft: "20px" }} variant="dark">
          {" "}
          <Link to="/checkout"> Checkout </Link>{" "}
        </Button>{" "}
      </div>
    </div>
  );
};
