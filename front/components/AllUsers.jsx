import React from "react";

import Table from 'react-bootstrap/Table'

export default ({allUsers,handleToggle}) =>{

    
    
    const Users= allUsers.map((alluser) =>{
        /*TOGGLE BUTTONS*/
    const buttonAdmin = (
    <button onClick={() =>handleToggle(2,alluser.id)} >add administrator</button>
    )
    
    const buttonSimpleUser = (
    <button onClick={() =>handleToggle(1,alluser.id)} >make a simple user</button>
    )
    //----------------------------------------------------------------------//
    
    let statusUser = alluser.status
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                    <th>add administrator</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{alluser.firstName} </td>
                    <td>{alluser.lastName}</td>
                    <td>{alluser.email}</td>
                    <td>{statusUser===1?buttonAdmin:buttonSimpleUser}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
        )
    })



                        
        return(
                <div>{Users} </div>
    )
    }
                        
                        
                
