import { RECEIVE_PRODUCT } from "../constants";
import {FOUND_PRODUCTS} from "../constants"

const initialState = {
  list: [],
  selectedProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOUND_PRODUCTS: 
       return Object.assign({}, state, { list: action.foundProducts });
    case RECEIVE_PRODUCT:
       return Object.assign({}, state, {
         selectedProduct: action.product
       })
    default: 
       return state;
  }
}