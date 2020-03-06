import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TarjetaCompra = function({productos, handleClick}) {
  const button2= {
    backgroundColor:"#D0C7C7",
    border: "solid 1px #D0C7C7",
    width: "30%"
  }
  const number = {
    textAlign:"center",
    width:"20%",
    display:"inline-block"
  }
  const button ={
    backgroundColor: "white",
    border: "solid 1px gray",
    width: "80%"
  }
  const cartStyle={
    display:"inline-block",
  }
  const border ={
    borderBottom: "1px groove #C0C0C0"
  }
     
    return (
      
      <div>
        {productos ? (
          productos.map(function(producto){
            return(
              <div style={{ marginTop:"50px", backgroundColor:"white"}}>
                <Container>
                  <Row style={{borderBottom: "1px groove #C0C0C0"}} >
                        <div key={producto.id}>
                    <Col sm={3} style={cartStyle}>
                        <img style={{width:"100%", marginBottom:"4px"}} src={producto.imgUrl}/>
                    </Col>
                    <Col sm={3} style={{display:"inline-block"}}>
                        <h4>{producto.name} </h4>
                        <h6>{"$" + producto.price} </h6>
                        <div style={{width:"80%"}} >
                            <button onClick={() => handleClick(producto.id, -1)} style={button2}>-</button> <h6 style={number} >{producto.quantity}</h6> <button onClick={() => handleClick(producto.id, 1)}style={button2}>+</button>
                        </div>
      
                    </Col>
                    <Col sm={{ span: 3, offset: 3 }} style={cartStyle} >
                        <button style={{ 
                          backgroundColor: "white",
                          border: "solid 1px gray",
                          width: "80%"}} >eliminar</button>
                    </Col>
                    </div>
                  </Row>
              </Container>
              </div>
                    )
                  }) 
        ) : null}
      </div>
     
    );
  };
  
  export default TarjetaCompra;
  