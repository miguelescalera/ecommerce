import { combineReducers } from 'redux';
import foundProduct from "./searchProductsReducer"

export default combineReducers(
    { 
        foundProduct:foundProduct
    
    }
 )