import React from "react";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";

export default ()=>{
   const styleMain={
    backgroundColor:"white",
    marginTop: "7%",
    width: "40%",
    marginLeft: "25%"
   }
    return(
        <div style={styleMain} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>select a options</th>
                    
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <Link to="/private/addAdmin">
                        manage users
                    </Link>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <Link to="/private/orders">
                        get all orders
                    </Link>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <Link to="/private/getAllProducts">
                        manage Products
                    </Link>
                    </td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )

}
           

             
            