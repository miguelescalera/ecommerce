import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import Row from "react-bootstrap/Row";


export default ({ handleChange, handleSubmit, input }) => {




  
  const formStyle = {
    width: "300px",
    padding: "1rem",
    borderRadius: "0px",

  }
  const divFormStyle = {
    justifyContent: 'center',
    marginBlockEnd: "5rem",
    marginBlockStart: "5rem",
    maxWidth: "400px"
    
  }

  const containerStyles={
    
    alignItems:'center',
backgroundColor:'rgba(0,0,0,0)',
border: '1px solid rgba(0,0,0,0)'    
  }



  return (

    <Card style={containerStyles}>
      <Row>

     
      
      <span style={divFormStyle}>
      <Img style={formStyle} src={'https://i.imgur.com/8gcnNuN.png'} />
      </span>
     
      <span>
        <div style={divFormStyle}>
          <Form onSubmit={handleSubmit} style={formStyle} >
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" onChange={handleChange} name='firstName' />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" onChange={handleChange} name='lastName' />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={handleChange} name='email' />
              <Form.Text className="text-muted">
                Nunca compartiremos tu Email
          </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' />
            </Form.Group>
            <Button variant="dark" type="submit">
              <FontAwesomeIcon icon={faGlassCheers} />
            </Button>
          </Form>
        </div>
      </span>
      </Row>
    </Card>

  );
};