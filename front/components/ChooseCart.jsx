import React from 'react'
import {Link} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Alert from "react-bootstrap/Alert"
import Img from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


export default ({ handleMerge, handleDiscard, handleReplace }) => {

  const formStyle = {
    width: "25%",
    height:'110%',
    padding:"3rem",
    borderRadius: "0px",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',

  }
  const divFormStyle ={
    display:"flex",
    justifyContent: 'center',
    marginBlockEnd: "5rem", 
    marginBlockStart: "5rem" 
  }
  return (
    <div  style={divFormStyle}>
      <Card style={formStyle}>
      <h3 className="d-flex justify-content-center" style={{    marginBlockEnd: "1rem" }}>Merge Conflict</h3>
        <Card.Text>
        Encontramos un carrito anterior asociado a tu cuenta. Que querés hacer con él?
        </Card.Text>
        <Button variant="dark" type="submit" style={{marginBlockStart:'1rem'}} onClick={handleReplace}>
            Reemplazar por nuevo.
        </Button>
        <Button variant="dark" type="submit" style={{marginBlockStart:'1rem'}} onClick={handleDiscard}>
        Descartar nuevo y quedarme con el original.
        </Button>
        <Button variant="dark" type="submit" style={{marginBlockStart:'1rem'}} onClick={handleMerge}>
            Unir ambos.
        </Button>

        <Container style={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end'}} >
        <div>
        <Img style={{width:'auto', height:'80px'}} src='https://i.imgur.com/AVYtOpw.png' />
        </div>
        <div>
        <Img style={{width:'auto', height:'150px'}} src='https://i.imgur.com/8G5Mimh.png' />
        </div>
        </Container>


      </Card>

    </div>
  )
}