import axios from "axios";

export const deleteProduct = function(idProduct){
    return axios.post(`/api/private/products/${idProduct}/delete`)
  }

  export const productUpdate = function(idProduct,product){
    return axios.put(`/api/private/products/${idProduct}/modify`,{product})
  }