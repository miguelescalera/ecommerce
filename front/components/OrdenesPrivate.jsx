import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'

const OrdenesPrivate = function({ ordenes }) {
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <Table hover>
            <tbody>
              <tr>
                <td>{ordenes.id}</td>
                <td> {ordenes.User.firstName + " " + ordenes.User.lastName}</td>
                <td>{"$" + ordenes.subTotal}</td>
                <td>{ordenes.createdAt}</td>
                <td>{ordenes.updatedAt}</td>
                <td>
                <DropdownButton
                  id="dropdown-item-button"
                  title={ordenes.status}
                >
                  <Dropdown.Item as="button">Process</Dropdown.Item>
                  <Dropdown.Item as="button">Complete</Dropdown.Item>
                </DropdownButton>
                </td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          {ordenes.products.map(producto => {
            console.log("este es mi producto personal", producto);
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
      </Accordion.Collapse>
    </Card>
  );
};
export default OrdenesPrivate;
