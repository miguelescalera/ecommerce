import axios from 'axios'
import {SET_ORDERS, SET_UPDATED_ORDER} from '../constants'

const SetOrders = orders=> ({
    type: SET_ORDERS,
    orders
  });

export const setUpdatedOrder = order => ({
  type: SET_UPDATED_ORDER,
  order
})


export const fetchOrders = () => dispatch => {
    axios.get("/api/private/orders")
    .then(res => res.data)
  .then(orders => dispatch(SetOrders(orders)))
}

export const changeOrderStatus = (order, status) => dispatch => {
    console.log("HOLAAA",status)
    axios.put(`/api/private/orders/${order.id}/update`, status)
    .then(order => axios.get("/api/private/orders"))
    .then(orders => dispatch(SetOrders(orders.data)))
}
