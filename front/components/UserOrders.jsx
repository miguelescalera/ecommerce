import React from "react"
import Table from "react-bootstrap/Table"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"

export default ({ orders }) => {
    console.log(orders)
    return (
      <div>
          {
              orders.map(order => {
                  return(
                      <div>
                      
                              <p>{order.id}</p>
                              <p>{order.adress}</p>
                              <p>{order.status}</p>
                              <p>{order.createdAt}</p>
                              <p>{order.updatedAt}</p>
                              <p>{order.subtotal}</p>
                          {order.products.map(product => {
                              return (<div>
                                  <p>{product.id}</p>
                                  <p>{product.name}</p>
                                  <p>{product.order_products.quantity}</p>
                                  <p>{product.order_products.totalPrice}</p>
                              </div>)
                              })
                          } 
                      </div>
                  )
              })
          }
      </div>
    )
  }

 