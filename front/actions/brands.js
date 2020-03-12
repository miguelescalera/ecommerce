import {GET_BRANDS} from "../constants"
import axios from "axios"

const setBrands = brands=> ({
    type: GET_BRANDS,
    brands
  });

export const getBrands = () => dispatch => {
    axios.get("/api/products/brands")
    .then(brands => {
        dispatch(setBrands(brands.data))})
}