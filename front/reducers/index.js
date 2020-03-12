import { combineReducers } from "redux";
import productReducer from "./productReducer";

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import cartReducer from "./cartReducer";
import LocalStorageReducer from "./LocalStorageReducer";
import ordersReducer from "./ordersReducer";
import allUsersReducer from "./allUsersReducer";
import navbarFilters from "./navbarFilters";


export default combineReducers({
  product: productReducer,
  user: userReducer,
  input: searchReducer,
  cart: cartReducer,
  productWithoutUser: LocalStorageReducer,
  orders: ordersReducer,
  allUsers: allUsersReducer,
  nav: navbarFilters
});
