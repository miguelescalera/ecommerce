import axios from "axios"

export const replaceCart = (localstorage) => dispatch =>{
    return axios
      .delete("/api/cart/delete")
      .then(result => {
        let array = localstorage.map(product=> {return axios.post(`/api/cart/products/${product.id}/modifycart`, {n: product.quantity})})
        return Promise.all(array)
      })
}

export const mergeCart = (localstorage) => dispatch =>{
  let array = localstorage.map(product=>{return axios.post(`/api/cart/products/${product.id}/modifycart`, {n: product.quantity})})
  return Promise.all(array)
}
