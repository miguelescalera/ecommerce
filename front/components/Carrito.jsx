import React from "react";
// import Image from "react-bootstrap/Image";

import { Link } from 'react-router-dom'
import { element } from "prop-types";


//estilos todo de react-bootstrap
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



let hardcodeada = [
    {
        name: "pepe",
        precio: 200
    }, {
        name: "hola",
        precio: 300
    }, {
        name: "chau",
        precio: 400
    }, {
        name: "carlos",
        precio: 1000
    }
]

let total = 0

export default ({ products, order }) => {

    const resumenCompraStyles = {
        width: '20rem',
        margin: '10px',
        borderRadius: "0px",
        boxShadow: '8px 8px 15px -10px rgba(0,0,0,0.39)',
    }

    return (
        <div>

            <Card style={resumenCompraStyles}>
                <Card.Header>Resumen de Compra</Card.Header>
                <ListGroup variant="flush">
                    {products ? (
                        products.map(Element => {
                            total = total + Element.totalPrice
                            return (
                                <ListGroup.Item >
                                    <Row style={{ style: 'flex', justifyContent: 'space-between' }}>
                                        <Col style={{ alignSelf: 'flex-start', display: 'block' }}>
                                            <span>{Element.name}</span>
                                        </Col>
                                        <Col style={{ alignSelf: 'flex-end', display: 'block', textAlign: 'right' }}>
                                            <span>${Element.totalPrice}</span>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                            )
                        })
                    ) : null}
                    <ListGroup.Item style={{ style: 'flex', justifyContent: 'space-between' }}>
                        <Row style={{ style: 'flex', justifyContent: 'space-between' }}>
                            <Col style={{ alignSelf: 'flex-start', display: 'block' }}>
                                <span>Total</span>
                            </Col>
                            <Col style={{ alignSelf: 'flex-end', display: 'block', textAlign: 'right' }}>
                                <span>${order.subTotal}</span>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Container style={{ style: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outline-dark"><Link to='/products'> Seguir comprando </Link></Button>
                            <Button style={{ marginLeft: "20px" }} variant="dark">  Checkout </Button>{' '} {/*hay que agregar un link a checkout*/}
                        </Container>
                    </ListGroup.Item>
                </ListGroup>
            </Card>




        </div >

    );
};
















{/* <div> */ }
{/* tarjetamapeda   */ }

{/* <Container> */ }
{/* <Row> */ }
{/* <Col xs={6} md={4}>
                    <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4qnpMXd5-nb0nI1wIWr7AhnWw7Mwzx8LIvF93AWleWiOA5rY2DXrCb45yYCMM5mm6p814AxAx&usqp=CAc"
                    rounded
                    />
                    <h4>nombre</h4>
                    <h4>precio</h4>
                    <Button variant="dark">-</Button>
                    <input type="text"/>
                    <Button variant="dark">+</Button>
                    <Button variant="dark">Eliminar</Button>
                </Col> */}
{/* </Row> */ }
{/* </Container> */ }

{/* </div> */ }




