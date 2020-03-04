import {BUSQUEDA_PROD} from './constants'

const initialState = {
    busquedaProductos:[]
}

export default (state = initialState, action) =>{
    switch (action.type){
        case BUSQUEDA_PROD:
            return {...state, busquedaProductos:action.productos}

        default:
            return state
    }
}