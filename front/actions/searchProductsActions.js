import { FOUND_PRODUCTS,PRODUCT_TO_UPDATE } from "../constants";
import axios from "axios";

const SearchProducts = foundProducts => ({
  type: FOUND_PRODUCTS,
  foundProducts
});

export const productToUpdate = toUpdate=> ({
  type: PRODUCT_TO_UPDATE,
  toUpdate
});
export const getAllProducts = () => dispatch => {
  return axios
    .get(`/api/products`)
    .then(result => {
      dispatch(SearchProducts(result.data))
      return result.data
    });
};

export const fetchSearchProducts = function(nameProduct) {
  let newName = nameProduct.split(" ").join("20%");
  return function(dispatch) {
    return axios
      .get(`/api/products?name=${newName}`)
      .then(res => res.data)
      .then(result => {
        dispatch(SearchProducts(result));
      });
  };
};
