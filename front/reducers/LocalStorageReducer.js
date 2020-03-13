import {GET_LOCALSTORAGE} from '../constants'

const initialState = {
  data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_LOCALSTORAGE: 
        return Object.assign({}, state, 
          { data: action.data});
      default:
         return state;
    }
  }