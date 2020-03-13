import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
import Form from "react-bootstrap/Form"
import Collapse from 'react-bootstrap/Collapse'


const orderPrivate = function ({ order, handleChange, handleClick }) {

  const [open, setOpen] = useState(false);

  const tablaStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '950px',
    margin:'auto',
    boxShadow: '8px 8px 15px -10px rgba(0,0,0,0.39)',

  }

  const padding = {
    paddingBlockStart: '3rem',
    paddingTopStart: '3rem',

  }





  return (
    <div style={padding}>
      <Card key={order.id} style={tablaStyles}>
        <Card.Header style={{width:'100%'}}>
          {/* <Accordion.Toggle as={Button} variant="link" eventKey="0"> */}

          <Table hover
            onClick={() => setOpen(!open)}
            aria-controls={order.id}
            aria-expanded={open}
          >
            <thead>
                <tr>
                  <th>Orden</th>
                  <th>Usuario</th>
                  <th>Total</th>
                  <th>Creada</th>
                  <th>Actualizada</th>
                  <th>Estado</th>
                  <th>Cambiar</th>
                  <th>Confirmar</th>
                </tr>
              </thead>
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
                    </Form.Group>
                  </Form>
                </td>
                <td>
                  <Form >
                    <Form.Group controlId="formBasicEmail">
                      <Button variant="dark" onClick={
                        (e) => {
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
        <Collapse in={open}>
          <Card.Body id={order.id}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map(producto => {
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
        {/* </Accordion.Collapse> */}
      </Card>
    </div>
  );
};
export default orderPrivate;
