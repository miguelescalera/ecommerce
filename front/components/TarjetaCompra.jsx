


import React from "react";
import Container from 'react-bootstrap/Container'

import Alert from "react-bootstrap/Alert"
import Card from 'react-bootstrap/Card'




import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const TarjetaCompra = function ({ productos, handleClick, handleDelete }) {
  const sumayResta = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    border: "solid 0px rgba(0, 0, 0, 0.0)",
    width: "25%",
    color:'#ffffff',
    borderWidth:'0px',
    borderColor:'rgba(0, 0, 0, 0.0)',
  }

  const containerFlex = {
    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    
    


  }


  const cantidad = {
    textAlign: "center",
    width: "20%",
    display: "inline-block",
    backgroundColor:'rgba(0, 0, 0, 0.3)'
  }

  const eliminarProd = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    border: "solid 0px gray",
    width: "10%",
    color: '#ffffff',
    paddingBlockEnd:'0.3rem'
  }

  const cardStyle = {
    width: '180px',
    height: '180px',
    border: "0px rgba(0,0,0,0)",
    margin: '10px',
    overflowX:'auto',
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',
    


  }

  const cardImageOver = {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: '0.35rem',
    borderRadius: "0px",

  }
  


  console.log('productosss', productos)
  return (
    <Container style={containerFlex}>
      {productos.length ? (
        productos.map(function (producto) {
          return (
            <Card id='tarjetaProd' key={producto.id} className="bg-dark text-white" style={cardStyle}>
              <Card.Img id="ImgTarjetaCompra" src={producto.imgUrl} alt="Card image" />
              <Card.ImgOverlay id='infoTarjetaProd' style={cardImageOver}>
                <Card.Title style={{ fontSize: '1.2rem', whiteSpace: "nowrap", overflowX: "hidden", overflowY : 'hidden' }}>{producto.name}</Card.Title>
                <h6>{"$" + producto.price} </h6>

                <Container style={{paddingLeft:'0px', display:'flex', justifyContent:'space-between', paddingBlockStart:'45%'}}>

                  <div style={{ width: "80%", paddingLeft:'0px' }} >
                    <button onClick={() => handleClick(producto.id, -1)} style={sumayResta}><FontAwesomeIcon icon={faMinus}/></button>
                    <h6 style={cantidad} >{producto.quantity}</h6>
                    <button onClick={() => handleClick(producto.id, 1)} style={sumayResta}><FontAwesomeIcon icon={faPlus}/></button>
                  </div>
                  <button style={eliminarProd} onClick={() => handleDelete(producto.id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </Container>

              </Card.ImgOverlay>
            </Card>

          )
        })) : <Alert variant="info">Aun no hay elementos en tu carrito</Alert>}

    </Container>


  );
};

export default TarjetaCompra;
