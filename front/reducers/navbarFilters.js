import { GET_BRANDS, GET_CATEGORIES} from "../constants";

const initialState = {
  categories:[],
  brands: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES: 
       return Object.assign({}, state, { categories: action.categories});
    case GET_BRANDS:
      return Object.assign({}, state, { brands: action.brands});
    default: 
       return state;
  }
}