import React from "react";
import Button from "react-bootstrap/Button"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";

export default ({allProducts,handleDelete,handleUpdate}) =>{

    allProducts= allProducts.sort()
    
    const products= allProducts.map((allProducts) =>{
       
    return (
            <tr>
            <td>{allProducts.name} </td>
            <td>{allProducts.price}</td>
            <td>{allProducts.stock}</td>
            <td>
            <Link to="/private/modifyProduct">
            <Button variant="dark"  onClick={() =>handleUpdate(allProducts.id)}>modify</Button>       
            </Link>
            </td>
            <td><Button variant="dark"  onClick={() =>handleDelete(allProducts.id)}>delete</Button> </td>
            </tr>
        )
    })
            return(
                    <div style={{backgroundColor:"white"}} >
                        <Link to="/private/addProducts">
                            <Button variant="dark" >add a new product</Button>       
                        </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>stock</th>
                        <th>update a product</th>
                        <th>delete product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products} 
                    </tbody>
                </Table>
                </div>
            )
            }
       
       
        