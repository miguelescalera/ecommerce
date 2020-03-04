import React from "react"
import Card from 'react-bootstrap/Card'
import Rating from 'react-rating'

const TarjetaProducto=function({producto}){
    return(
            <Link to ={`/product/${producto.id}`}>
                <div key={producto.id} >
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={producto.imgUrl} />
                            <Card.Body>
                                <Card.Title>{producto.name}</Card.Title>
                                <Card.Text>
                                    {producto.description}
                                </Card.Text>
                                <Rating value={producto.rating} readOnly />
                                <Card.Title>{producto.price}</Card.Title>
                                <Button variant="dark">Agregar</Button>
                            </Card.Body>
                    </Card>
                </div>
            </Link>
    )
            
}

export default TarjetaProducto