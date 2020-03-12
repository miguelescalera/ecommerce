import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from "react-bootstrap/Form"

const orderPrivate = function({ order, handleChange, handleClick }) {
  return (
    <Card>
      <Card.Header>
        {/* <Accordion.Toggle as={Button} variant="link" eventKey="0"> */}
          <Table hover>
            <tbody>
              <tr>
                <td>{order.id}</td>
                <td> {order.User.firstName + " " + order.User.lastName}</td>
                <td>{"$" + order.subTotal}</td>
                <td>{order.createdAt}</td>
                <td>{order.updatedAt}</td>
                <td>{order.status}</td>
                <td>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control as="select" name="status" onChange={handleChange}>
                            <option>comprado</option>
                            <option>procesada</option>
                            <option>enviada</option>
                            <option>recibida</option>
                      </Form.Control>
                      <Button variant="dark" onClick={
                        (e)=>{
                        e.preventDefault()
                        return handleClick(order)
                        }}>
                          Cambiar status
                      </Button>
                    </Form.Group>
                </Form>
                </td>
              </tr>
            </tbody>
          </Table>
        {/* </Accordion.Toggle> */}
      </Card.Header>
      {/* // <Accordion.Collapse eventKey="0"> */}
        <Card.Body>
          {order.products.map(producto => {
            return (
              <tbody>
                <tr>
                  <td>{producto.name}</td>
                  <td> {producto.order_products.quantity} </td>
                  <td>{"$" + producto.order_products.totalPrice}</td>
                </tr>
              </tbody>
            );
          })}
        </Card.Body>
      {/* </Accordion.Collapse> */}
    </Card>
  );
};
export default orderPrivate;
