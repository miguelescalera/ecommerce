import React from "react"
import Card from 'react-bootstrap/Card'

const TarjetaProducto=function({foundProducts}){
   let products = foundProducts.map(function(prd){
                <div key={prd.id} >
                    <Card>
                        <Link to ={`/product/${prd.id}`}>
                            <Card.Img variant="top" src={prd.imgUrl} />
                            <Card.Body>
                                <Card.Title>{prd.name}</Card.Title>
                                <Card.Text>
                                    {prd.description}
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </div>
        })
                        

   
    return(
           <div>
               {products}
           </div> 
    )
}

export default TarjetaProducto