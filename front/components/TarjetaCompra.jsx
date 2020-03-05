import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TarjetaCompra = function({/*compra*/}) {
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
  let compra =[
    {
      imgUrl:"https://www.catadelvino.com/uploads/que-significa-la-categoria-de-vino-de-mesa-4917-1.jpg",
      name:"vino",
      price:200
    },
    {
      imgUrl:"https://www.catadelvino.com/uploads/que-significa-la-categoria-de-vino-de-mesa-4917-1.jpg",
      name:"vino",
      price:200
    },
    {
      imgUrl:"https://www.catadelvino.com/uploads/que-significa-la-categoria-de-vino-de-mesa-4917-1.jpg",
      name:"vino",
      price:200
    },
    {
      imgUrl:"https://www.catadelvino.com/uploads/que-significa-la-categoria-de-vino-de-mesa-4917-1.jpg",
      name:"vino",
      price:200
    }
  ]

    let carrito = compra.map(function(e,index){
      return(
        <div style={{width:"45%", backgroundColor:"white"}}>
          <Container>
            <Row style={border} >
                  <div key={index}>
              <Col sm={2} style={cartStyle}>
                  <img style={{width:"80%", marginBottom:"4px"}} src={e.imgUrl}/>
              </Col>
              <Col sm={3} style={cartStyle}>
                  <h3>{e.name} </h3>
                  <h6>{"$" + e.price} </h6>
                  <div style={{width:"80%"}} >
                      <button style={button2}>-</button> <h6 style={number} >1</h6> <button style={button2}>+</button>
                  </div>

              </Col>
              <Col sm={{ span: 3, offset: 3 }} style={cartStyle} >
                  <button style={button} >eliminar</button>
              </Col>
              </div>
            </Row>
        </Container>
        </div>
              )
            })
              

              
                
  
    return (
      
      <div>
        {carrito}
      </div>
     
    );
  };
  
  export default TarjetaCompra;
  