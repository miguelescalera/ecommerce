import {SET_CARTPRODUCT, GET_CART, GET_CARTPRODUCTS, RESET_CART} from "../constants"
import Promise from "bluebird"
import axios from "axios";


const setCart= (cart) => ({
    type: GET_CART,
    cart
  });

export const resetCart= () => ({
    type: RESET_CART,
    cart: []
  });

export const setCartProduct  = (product) => ({
  type: SET_CARTPRODUCT,
  product
})

export const getCart = (user) => dispatch => {
    axios.get("/api/cart").then(res => res.data)
  .then(products => dispatch(setCart(products, false)))
}

export const modifyCartProduct = (productId, quantity) => dispatch => {
return axios
  .post(`/api/cart/products/${productId}/modifycart`, {n: quantity})
  .then(product => {
    dispatch(setCartProduct(product.data))
    return product
  })
};

export const deleteCartProduct = (productId) => dispatch => {
  return axios
  .post(`/api/cart/products/${productId}/deletefromcart`)
  .then(product => {
    dispatch(setCartProduct({}))
    return product
  })
}
//HACER LO DE ORDERS
export const checkoutCart = (data) => dispatch =>{
  return axios
  .put(`/api/cart/checkout`, data)
  .then(order => {
    dispatch(setCart([]))
    return order
})
}
  