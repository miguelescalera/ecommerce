import React from "react"
import {Link} from "react-router-dom"
import Table from "react-bootstrap/Table"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


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
  return (
    <Card>
      <Card.Header key={order.id}>
          <Table hover>
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
      </Card.Header>
        <Card.Body>
          {order.products.map(product => {
            return (
              <tbody>
                <tr>
                  <td>{product.name}</td>
                  <td> {product.order_products.quantity} </td>
                  <td>{"$" + product.order_products.totalPrice}</td>
                  <td><Button style={{ marginLeft: "20px" }} variant="dark" > <Link to={`/users/myorders/addReview/${product.id}`}>Agregar una opinión</Link></Button></td>
                </tr>
              </tbody>
            );
          })}
        </Card.Body>
    </Card>
  );
};


 