import { LOGIN_USER, LOGOUT_USER } from "../constants"; // verificar si esto esta exportando bien
import axios from "axios";

export const addLogin = user => ({
  type: LOGIN_USER,
  user
});

// const addLogout = ()=> ({
//   type: LOGOUT_USER,
//   user: {}
// })

export const loginUser = user => dispatch =>
  axios
    .post("/api/users/login", { email: user.email, password: user.password })
    .then(user => {
      dispatch(addLogin(user.data))
      return user.data;
    });

export const logoutUser = user => dispatch => {
  axios.post("api/users/logout").then(function() {
    localStorage.clear();
    dispatch(addLogin({}))
})
}