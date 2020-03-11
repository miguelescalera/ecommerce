import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
​
export default () => {
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirst Name">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>
​
          <Form.Group as={Col} controlId="formGridLast Name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Form.Row>
​
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
​
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
​
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>
​
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
​
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Delivery Instructions</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
​
        <Button variant="primary" type="submit">
          Checkout
        </Button>
      </Form>
    </div>
  );
};