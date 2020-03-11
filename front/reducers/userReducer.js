import { LOGIN_USER} from '../constants';
import {GET_USER_ORDERS} from "../constants"

const initialState = {
    loginUser: {},
    orders: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER: 
      return Object.assign({}, state, { loginUser: action.user });
    case GET_USER_ORDERS:
      return Object.assign({}, state, { orders: action.orders });
    default:
      return state;
  }
}