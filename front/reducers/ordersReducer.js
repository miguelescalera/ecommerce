import { SET_ORDERS, SET_UPDATED_ORDER} from "../constants";

const initialState = {
  orders:[],
  updatedOrder: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS: 
       return Object.assign({}, state, { orders: action.orders});
    case SET_UPDATED_ORDER:
      return Object.assign({}, state, { updatedOrder: action.order});
    default: 
       return state;
  }
}