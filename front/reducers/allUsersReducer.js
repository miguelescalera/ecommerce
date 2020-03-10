import { FOUND_USERS } from "../constants"

const initialState = {
  allUsers: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
      case FOUND_USERS: 
         return Object.assign({}, state, { allUsers: action.foundUsers});
     
      default: 
         return state;
    }
  }
  