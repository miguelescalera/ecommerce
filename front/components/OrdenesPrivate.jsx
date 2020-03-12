import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'

const OrdenesPrivate = function ({ ordenes }) {

  const [open, setOpen] = useState(false);

  const tablaStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '850px',
  }

  const padding = {
    paddingBlockStart:'1rem',
    paddingTopStart:'1rem',
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',

  }


  return (
    <div style={padding}>

    <Card key={ordenes.id} style={tablaStyles}>
      <Table hover
        onClick={() => setOpen(!open)}
        aria-controls={ordenes.id}
        aria-expanded={open}
      >
        <tbody>
          <tr>
            <td>{ordenes.id}</td>
            <td> {ordenes.User.firstName + " " + ordenes.User.lastName}</td>
            <td>{"$" + ordenes.subTotal}</td>
            <td>{ordenes.createdAt}</td>
            <td>{ordenes.updatedAt}</td>
            <td>
              <DropdownButton
                style={{ width: '100px' }}
                id="dropdown-item-button"
                title={ordenes.status}

              >
                <Dropdown.Item style={{ width: '100px' }} as="button" variant='dark' >Process</Dropdown.Item>
                <Dropdown.Item style={{ width: '100px' }} as="button" variant='dark' >Complete</Dropdown.Item>
              </DropdownButton>
            </td>
          </tr>
        </tbody>
      </Table>

      <Collapse in={open}>
        <Card.Body id={ordenes.id}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {ordenes.products.map(producto => {
                return (
                  <tr>
                    <td>{producto.name}</td>
                    <td>{producto.order_products.quantity}</td>
                    <td>{"$" + producto.order_products.totalPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Collapse>
    </Card>
    </div>
  );
};
export default OrdenesPrivate;
      

