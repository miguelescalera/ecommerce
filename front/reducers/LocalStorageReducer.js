import {LOCALSTORAGE} from "../constants"

const initialState = {
    products:[]
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case LOCALSTORAGE: 
      return Object.assign({}, state, { products: action.selectedProduct });
          
      default: 
         return state;
    }
  }