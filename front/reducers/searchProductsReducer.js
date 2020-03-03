import {FOUND_PRODUCTS} from "../constants"
const initialState = { foundProducts: [] };

export default function foundProduct (state = initialState, action) {
  switch (action.type) {
    case FOUND_PRODUCTS: 
       return Object.assign({}, state, { movies: action.movies });
    default: 
       return state;
  }
}