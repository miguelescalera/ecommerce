import axios from 'axios'
import {SET_ORDERS} from '../constants'

const SetOrders = orders=> ({
    type: SET_ORDERS,
    orders
  });


export const fetchOrders = () => dispatch => {
    axios.get("/api/private/orders")
    .then(res => res.data)
  .then(orders => dispatch(SetOrders(orders)))
}