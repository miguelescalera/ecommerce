import { SET_INPUT} from '../constants';

const initialState = {
    value: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_INPUT: 
      return Object.assign({}, state, { value: action.input });
    default:
      return state;
  }
}