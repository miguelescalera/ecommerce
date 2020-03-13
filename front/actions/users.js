import axios from "axios";

export const newUser = userData => dispatch =>
  axios.post("/api/users/register", userData).then(res => {
    return res.data;
  });


