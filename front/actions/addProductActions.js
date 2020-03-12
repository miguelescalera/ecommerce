import axios from "axios";

export const newProduct = input => {
  console.log(input);
  axios.post("/api/private/products/add", input).then(res => {
    console.log(res.data, "aaaaaaaaaaaaaaaaaaaaaaa");
  });
};

export const updateThisProduct = product =>{
  axios.post(`/api/private/products/${product.id}/modify`,product)
}