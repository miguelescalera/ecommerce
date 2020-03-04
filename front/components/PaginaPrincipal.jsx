import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default ({}) => {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>Aqui va a estar nuestro ecommerce wineNot por que no? por que si.</p>
        <p>
          <Link to={`/products/${3}`}>
            <Button variant="primary">Producto hardcodeado en 3</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};
