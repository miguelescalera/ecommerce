import React from "react"
<<<<<<< HEAD
import Card from 'react-bootstrap/Card'
import { privateDecrypt } from "crypto";
var Rating = require('react-rating');


const TarjetaProducto = function ({ foundProducts }) {
    let products = foundProducts.map(function (prd) {
        <div key={prd.id} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prd.imgUrl} />
                <Card.Body>
                    <Card.Title>{prd.name}</Card.Title>
                    <Card.Text> {prd.description}</Card.Text>
                    <Rating value={prd.rating} readOnly />
                    <Card.Title>{prd.price}</Card.Title>
                    <Button variant="dark">Agregar</Button>

                </Card.Body>
            </Card>
        </div>
    })



    return (
        <div>
            {products}
        </div>
=======


const TarjetaProducto=function(/*{foundProducts}*/){

  


   
                        

   
    return(
          
>>>>>>> dbbb9495792bf0ad11d7da91608736d468d9d304
    )
}

export default TarjetaProducto