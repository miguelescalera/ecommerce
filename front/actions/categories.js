import {GET_CATEGORIES} from "../constants"
import axios from "axios"

const setCategories = categories=> ({
    type: GET_CATEGORIES,
    categories
  });

export const getCategories = () => dispatch => {
    axios.get("/api/products/categories")
    .then(categories => {
        dispatch(setCategories(categories.data))})
}