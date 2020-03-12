import { RECEIVE_PRODUCT,PRODUCT_TO_UPDATE ,FOUND_PRODUCTS} from "../constants";


const initialState = {
  list: [],
  selectedProduct: {},
  productToUpdate:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOUND_PRODUCTS: 
       return Object.assign({}, state, { list: action.foundProducts });
    case RECEIVE_PRODUCT:
       return Object.assign({}, state, {
         selectedProduct: action.product
       })
       case PRODUCT_TO_UPDATE:
       return Object.assign({}, state, {
        productToUpdate: action.toUpdate
       })
    default: 
       return state;
  }
}