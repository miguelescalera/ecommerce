import { SET_ORDERS} from "../constants";

const initialState = {
  orders:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS: 
       return Object.assign({}, state, { orders: action.orders});
    default: 
       return state;
  }
}