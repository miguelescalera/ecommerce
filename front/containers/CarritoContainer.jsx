import React from 'react'
import Carrito from '../components/Carrito'
import TarjetaCompra from "../components/TarjetaCompra"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class CarritoContainer extends React.Component{
    constructor(){
        super()
    }

render(){
    return(
        <div>
            <Container> 
                <Row>
                    <Col sm={8}>
                    <TarjetaCompra/>
                    </Col>
                    <Col sm={4}>
                    <Carrito/>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
}


