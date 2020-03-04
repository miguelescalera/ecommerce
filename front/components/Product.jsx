import React from "react";

export default ({ selectedProduct }) => {
  return (
    <div key={selectedProduct.id}>
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.imgUrl} alt="" />
      <p>{selectedProduct.description}</p>
      <p>${selectedProduct.price}</p>
    </div>
  );
};
