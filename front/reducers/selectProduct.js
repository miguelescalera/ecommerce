import { RECEIVE_PRODUCT } from "../constants";

const initialState = {
  selectedProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, {
        selectedProduct: action.product
      });
    default:
      return state;
  }
};
