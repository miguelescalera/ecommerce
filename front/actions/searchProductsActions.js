import {FOUND_PRODUCTS} from "../constants" // verificar si esto esta exportando bien
import axios from "axios"

const SearchProducts = foundProducts => ({
    type: FOUND_PRODUCTS,
    foundProducts,
  }); 

  const fetchSearchProducts = function(nameProduct){
     let newName = nameProduct.split(" ").join("20%")
    return function(dispatch){
        return axios.post(`products/search?name=${newName}`)
            .then((response) => {
            return response.json()
          })
           .then((movie) => {
            dispatch(SearchProducts(movie))
          })

    }
  }
export default fetchSearchProducts