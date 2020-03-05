import React from "react";
import TarjetaProducto from "./TarjetaProducto";

export default ({ products }) => {
  return(
    <div className="container d-flex flex-wrap">
      {products.map(product => {
        return <TarjetaProducto product={product} />;
      })}
    </div>

  )

};
