import React from "react"
import { connect } from "react-redux"
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//ESTE ES INFORMACION DE PRUEBA TODO ESTO DEBERIA VENIR DEL STORE
const foundProducts = [
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
    {name:"este es un vinito",description:"alto vinito, super rico y barato", imgUrl:"https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3060542_f.jpg"},
]
////////////////////////////////////////////////////////////////////////////////
let products = foundProducts.map(function(prd){
    return(  
                <Col sm={4}>
                    <div key={prd.id} >
                        <Card>
                            <Link to ={`/product/${prd.id}`}>
                                <Card.Img variant="top" src={prd.imgUrl} />
                                <Card.Body>
                                    <Card.Title>{prd.name}</Card.Title>
                                    <Card.Text>
                                        {prd.description}
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                        </Card>
                    </div>
                </Col>

           )
       })
           



class ProductsContainer extends React.Component{
constructor(){
    super()
}
        render(){
            
            return(

            <div>
                
                <Container>
                <Row>
                   {products}
                </Row>
                </Container>
            </div>
                )

            }
        }


const mapStateToProps = function (state) {
    return {
        foundProducts: state.foundProducts,
        
    };
}
export default connect(mapStateToProps)(ProductsContainer);
