import React from 'react'
import TarjetaProducto from './TarjetaProducto'

export default ({ products}) => {
    return (
        products.map(product=>{
            return <TarjetaProducto product={product}/>
        })
    )
}