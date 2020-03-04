import {FOUND_PRODUCTS} from "../constants"
const initialState = { foundProducts: "aun no hay productos" };

 const foundProduct=function (state = initialState, action) {
  switch (action.type) {
    case FOUND_PRODUCTS: 
       return Object.assign({}, state, { foundProducts: action.foundProducts });
    default: 
       return state;
  }
}
export default foundProduct;