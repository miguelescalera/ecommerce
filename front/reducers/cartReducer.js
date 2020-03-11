import { SET_CARTPRODUCT, GET_CART, RESET_CART } from "../constants";

const initialState = {
  products: [],
  modifiedProduct: {},
  order: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: 
       return Object.assign({}, state, { products: action.cart.list, order: action.cart.order });
    case RESET_CART: 
       return Object.assign({}, state, { products: [] });
    case SET_CARTPRODUCT:
      return Object.assign({}, state, { modifiedProduct: action.product });
    default: 
       return state;
  }
}