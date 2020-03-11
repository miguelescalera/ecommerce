import {GET_USER_ORDERS} from "../constants"

const setUserOrders = orders=> ({
    type: GET_USER_ORDERS,
    orders
  });

  