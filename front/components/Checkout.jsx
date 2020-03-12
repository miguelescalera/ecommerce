import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from "react-bootstrap/Col"

export default ({handleClick, handleChange}) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Dirección</Form.Label>
          <Form.Control placeholder="1234 Av. Siempreviva" name="adress" onChange={handleChange}/>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity" >
            <Form.Label>Ciudad</Form.Label>
            <Form.Control name="city" onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState"  >
            <Form.Label>Provincia</Form.Label>
            <Form.Control name="prov" onChange={handleChange}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumber"  >
            <Form.Label>Número de Contacto</Form.Label>
            <Form.Control name="phone" onChange={handleChange} />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlTextarea1" >
          <Form.Label>Instrucciones</Form.Label>
          <Form.Control as="textarea" rows="3" name="deliveryInstructions" onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick} >
          Submit
        </Button>
      </Form>
    </div>
  );
};