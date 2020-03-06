import { SET_CARTPRODUCT, GET_CART } from "../constants";

const initialState = {
  products: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: 
       return Object.assign({}, state, { products: action.cart });
    default: 
       return state;
  }
}