import React from "react"
import {Link} from "react-router-dom"
import Table from "react-bootstrap/Table"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import Collapse from 'react-bootstrap/Collapse'


export default ({ orders }) => {
    return (
      <div>
          {
              orders.length? (orders.map(order => {
                  return(
                      <Order order={order}/>
                  )
              })
            ): <Alert variant="info">No has realizado compras aún</Alert>
            }
      </div>
    )
  }


//order INDIVIDUAL

const Order = function({ order }) {

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
                  <th>Total</th>
                  <th>Creada</th>
                  <th>Modificada</th>
                  <th>Estado</th>

                </tr>
              </thead>
            <tbody>
            <tr>
                <td>{order.id}</td>
                <td>{"$" + order.subTotal}</td>
                <td>{order.createdAt}</td>
                <td>{order.updatedAt}</td>
                <td>{order.status}</td>
              </tr>
            </tbody>
          </Table>
          {/* </Accordion.Toggle> */}
        </Card.Header>
        <Collapse in={open}>
          <Card.Body id={order.id}>
            <Table striped bordered hover>
          <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Review</th>

                  
                </tr>
              </thead>
          {order.products.map(product => {
            return (
              <tbody>
                <tr>
                  <td>{product.name}</td>
                  <td> {product.order_products.quantity} </td>
                  <td>{"$" + product.order_products.totalPrice}</td>
                  <td><Button style={{ marginLeft: "20px" }} variant="outline-dark" > <Link to={`/users/myorders/addReview/${product.id}`}>Agregar una opinión</Link></Button></td>
                </tr>
              </tbody>
            );
          })}

          </Table>

          </Card.Body>
        </Collapse>
      </Card>
    </div>


  );
};


 