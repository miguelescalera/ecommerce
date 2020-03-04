import { combineReducers } from "redux";
import foundProduct from "./searchProductsReducer";
import selectedProduct from "./selectProduct";

export default combineReducers({
  foundProduct: foundProduct,
  selectedProduct: selectedProduct
});
