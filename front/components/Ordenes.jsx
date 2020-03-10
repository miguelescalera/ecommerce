import React from "react";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'




const Ordenes = function ({ orden, arrayProductos }) {

    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Table hover>
                        <tbody>
                            <tr>
                                <td>0002313</td>
                                <td> 24/01/2020</td>
                                <td>siempre viva 2312</td>
                                <td> $1500</td>
                                <td>Entregada</td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <tbody>
                        <tr>
                            <td>23123</td>
                            <td> 5 </td>
                            <td>$1550</td>
                            <td><Button variant="dark" onClick='/RUTAaReview' > Agregar opinion </Button> </td>
                        </tr>
                    </tbody>
                    {/* {arrayProductos.map(product => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{product.productId}</td>
                                    <td> {product.quantity} </td>
                                    <td>{product.totalPrice}</td>
                                    <td><Button variant="dark" onClick='/RUTAaReview' > Agregar opinion </Button> </td>
                                </tr>
                            </tbody>
                        )
                    })} */}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
};
export default Ordenes;


