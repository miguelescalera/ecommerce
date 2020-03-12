import {GET_USER_ORDERS} from "../constants"
import axios from "axios"

const setUserOrders = orders=> ({
    type: GET_USER_ORDERS,
    orders
  });

  export const getUserOrders = () => dispatch => 
      axios.get("/api/users/myorders")
      .then(orders => dispatch(setUserOrders(orders.data)))
