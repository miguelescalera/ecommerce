import { RECEIVE_PRODUCT } from "../constants";
import axios from "axios";

const receiveProductSelected = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const fetchProduct = id => dispatch =>
  axios
    .get(`/products/${id}`)
    .then(res => res.data)
    .then(product => dispatch(receiveProductSelected(product)));
