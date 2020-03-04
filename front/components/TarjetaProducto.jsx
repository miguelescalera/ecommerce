import React from "react"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import Rating from 'react-rating'
import Button from 'react-bootstrap/Button'

const TarjetaProducto=function({product}){
    return(
            <Link to ={`/products/${product.id}`}>
                <div key={product.id} >
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.imgUrl} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Rating value={product.rating} readOnly />
                                <Card.Title>{product.price}</Card.Title>
                                <Button variant="dark">Agregar</Button>
                            </Card.Body>
                    </Card>
                </div>
            </Link>
    )
            
}

export default TarjetaProducto