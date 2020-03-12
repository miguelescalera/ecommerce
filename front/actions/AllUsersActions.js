import { FOUND_USERS } from "../constants"
import axios from "axios";

const SearchUsers = foundUsers => ({
    type: FOUND_USERS,
    foundUsers
  });
  export const toggleStatus = function(userStatus,idUser){
    axios.post(`/api/private/addAdmin`,{status:userStatus,id:idUser})
  }
   

  export const getAllUsers = () => dispatch => {
    return axios
      .get(`/api/private/getUsers`)
      .then(res => res.data)
      .then(result => {
        dispatch(SearchUsers(result));
      });
  };

  export const deleteUser = function(idUser){
    return axios.delete(`/api/private/delete/${idUser}`)
  }