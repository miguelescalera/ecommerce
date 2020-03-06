import React from "react";
import TarjetaProducto from "./TarjetaProducto";

export default ({ products, handleClick }) => {
  return(
    <div className="container d-flex flex-wrap">
      {products.map(product => {
        return <TarjetaProducto product={product} handleClick={handleClick} />;
      })}
    </div>

  )

};
