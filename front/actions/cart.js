import {SET_CARTPRODUCT, GET_CART, GET_CARTPRODUCTS} from "../constants"
import Promise from "bluebird"
import axios from "axios";


const setCart= (cart, loading) => ({
    type: GET_CART,
    cart,
    loading
  });

export const getCart = () => dispatch => {
  axios.get("/api/cart").then(res => res.data)
.then(products => dispatch(setCart(products, false)))
}

export const setCartProducts = (productId, quantity) => dispatch => {
    console.log(productId)
return axios
  .post(`/api/cart/products/${productId}/modifycart`, {n: quantity})
  .then(result => console.log(result))
};
