import { combineReducers } from "redux";
import productReducer from "./productReducer";
<<<<<<< HEAD
import userReducer from './userReducer'
import searchReducer from "./searchReducer"
import cartReducer from './cartReducer'
import LocalStorageReducer from "./LocalStorageReducer"
import allUsersReducer from "./allUsersReducer"
=======

import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import cartReducer from "./cartReducer";
import LocalStorageReducer from "./LocalStorageReducer";
import ordersReducer from "./ordersReducer";
import allUsersReducer from "./allUsersReducer";
>>>>>>> 4d6dd7f9442ed54d6bb0b1f565d82abe0f49a851


export default combineReducers({
  product: productReducer,
  user: userReducer,
  input: searchReducer,
  cart: cartReducer,
<<<<<<< HEAD
  productWithoutUser:LocalStorageReducer,
  allUsers:allUsersReducer,
=======

  productWithoutUser: LocalStorageReducer,
  orders: ordersReducer,
  allUsers: allUsersReducer

>>>>>>> 4d6dd7f9442ed54d6bb0b1f565d82abe0f49a851
});
