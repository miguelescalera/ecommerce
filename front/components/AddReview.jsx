import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'
import Alert from "react-bootstrap/Alert"

//revisar

export default ({ handleChange, handleSubmit }) => {

  const formStyle = {
    width: "25%",
    padding:"3rem"
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
      <h3 className="d-flex justify-content-center" style={{ marginBlockEnd: "1rem" }}>Iniciá sesión</h3>
        <Form >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control onChange={handleChange} as="select" name="rating">
                <option>Elige una opcion</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Comentario</Form.Label>
            <Form.Control onChange={handleChange} as="textarea" type="text" placeholder="Comenta que te pareció nuestro producto." name="description" onChange={handleChange} />
          </Form.Group>
          <Button variant="dark" style={{marginBlockStart:'1rem'}} onClick={handleSubmit} >
            Enviar
        </Button>
        </Form>
      </Card>
    </div>
  )
}