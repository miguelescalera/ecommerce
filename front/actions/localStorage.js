import {GET_LOCALSTORAGE} from "../constants"

const getLocalStorage = data => ({
    type: GET_LOCALSTORAGE,
    data
  });

export const setLocalStorage = (data) => dispatch => {
    console.log("DATA", data)
    dispatch(getLocalStorage(data))
    return data
}

