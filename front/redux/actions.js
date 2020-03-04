import {BUSQUEDA_PROD} from './constants'
import axios from 'axios'

const busquedaProdAction = (valor) => {
    return {type: BUSQUEDA_PROD, busquedaProductos: valor}
};

export const fetchProductos=(name)=> dispatch =>{
    axios.get('http://localhost:3000/search', name)
    .then((resolve)=>resolve.data)
    .then((resolve)=>
        dispatch(busquedaProdAction(resolve))
    )
}