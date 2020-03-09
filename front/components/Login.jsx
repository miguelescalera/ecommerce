import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card'

export default ({ handlerChange, handlerSubmit }) => {


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
      <h3 className="d-flex justify-content-center" style={{    marginBlockEnd: "1rem" }}>Iniciá sesión</h3>
        <Form  >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handlerChange} />
            <Form.Text className="text-muted">
              Iniciá sesión con tu email
          </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handlerChange} />
          </Form.Group>
          <Button variant="dark" type="submit" style={{marginBlockStart:'1rem'}} onClick={handlerSubmit}>
            Iniciar Sesión
        </Button>
        </Form>
      </Card>
    </div>
  )
}