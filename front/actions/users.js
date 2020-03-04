import axios from 'axios';

export const newUser = userData => dispatch =>
  axios.post('/users/register', userData)
  .then(res =>  {
      console.log(res)
  })