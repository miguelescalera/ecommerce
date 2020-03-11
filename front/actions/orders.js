<<<<<<< HEAD
import {GET_USER_ORDERS} from "../constants"
import axios from "axios"

const setUserOrders= (orders) => ({
    type: GET_USER_ORDERS,
    orders
  });

export const getUserOrders = () => dispatch => {
    return axios
      .get(`/api/users/myorders`)
      .then(res => res.data)
      .then(result => {
        dispatch(setUserOrders(result));
      });
  };

=======
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
>>>>>>> 4d6dd7f9442ed54d6bb0b1f565d82abe0f49a851
