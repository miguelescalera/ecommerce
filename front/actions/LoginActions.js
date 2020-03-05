import {LOGIN_USER} from "../constants" 
import axios from "axios"

export const addLogin = user => ({
    type: LOGIN_USER,
    user
  }); 


  export const loginUser = (user) => dispatch =>
axios.post("/users/login", {email: user.email, password: user.password})
.then(user => {
    dispatch(addLogin(user.data))
    })