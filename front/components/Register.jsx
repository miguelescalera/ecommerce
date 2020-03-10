import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';


export default ({ handleChange, handleSubmit, input }) => {
  const formStyle = {
    width: "25%",
    padding: "3rem",
    borderRadius: "0px",
    boxShadow: '8px 8px 15px -10px rgba(0,0,0,0.39)',
    backgroundColor: '#ffffff'

  }
  const divFormStyle = {
    display: "flex",
    justifyContent: 'center',
    marginBlockEnd: "5rem",
    marginBlockStart: "5rem",

  }



  return (
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
  );
};