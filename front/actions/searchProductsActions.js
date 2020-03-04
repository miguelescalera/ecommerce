import {FOUND_PRODUCTS} from "../constants" // verificar si esto esta exportando bien
import axios from "axios"

const SearchProducts = foundProducts => ({
    type: FOUND_PRODUCTS,
    foundProducts,
  }); 

export const getAllProducts = () => dispatch => {
      return axios.get(`/products`)
          .then((res) => res.data)
         .then((result) => {
          dispatch(SearchProducts(result))
        })
  }

export const fetchSearchProducts = function(nameProduct){
     let newName = nameProduct.split(" ").join("20%")
    return function(dispatch){
        return axios.get(`/products?name=${newName}`)
            .then((res) => res.data)
           .then((result) => {
            dispatch(SearchProducts(result))
          })
    }
  }
