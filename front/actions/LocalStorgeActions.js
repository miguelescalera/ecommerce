import {LOCALSTORAGE} from "../constants"
export default  (selectedProduct) => ({
    type: LOCALSTORAGE,
    selectedProduct
})
