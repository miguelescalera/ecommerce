import React from "react";
// import Image from "react-bootstrap/Image";

import { Card, Button } from 'react-bootstrap'


export default ({ nombre, apellido, order, handleSubmit }) => {

    const graciasCardStyles = {
        margin:'auto',
        marginBlockStart:'3rem',
        width: '600px',
        height: '330px'

    }

    const cardImgOverlay = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        textAlign: 'left', 
        width: '350px',
        marginLeft:'15'

    }


    console.log(order);
    
    return (
        <div style={{margin:'auto'}}>
            <Card style={graciasCardStyles}>
                <Card.Img src="https://media.giphy.com/media/SxGLftWetiJDcxeA9F/giphy.gif" alt="Card image" />

                <Card.ImgOverlay style={cardImgOverlay}>
                    <Card.Title>GRACIAS {nombre.toUpperCase()}</Card.Title>
                    <Card.Text style={{width:'250px'}}>
                        Tu pedido fue procesado, <br></br>
                        <br></br>
                        recibiras un mail de confirmación<br></br>
                        {/* Orden:{order.id}<br></br>
                        Dirección: {order.adress},{order.city}<br></br>
                        Detalles de Entrega:<br></br>
                        {order.deliveryInstructions}<br></br> */}
                    </Card.Text>
                    
                    <Button  onClick={handleSubmit} variant="outline-dark" style={{width:'150px'}}> Seguir comprando </Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
} 


