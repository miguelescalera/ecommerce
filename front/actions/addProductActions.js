import axios from "axios";

export const newProduct = input => {
  console.log(input);
  axios.post("/api/private/products/add", input).then(res => {
    console.log(res.data, "aaaaaaaaaaaaaaaaaaaaaaa");
  });
};
