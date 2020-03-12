import React from "react";
import Button from "react-bootstrap/Button"
import Table from 'react-bootstrap/Table'

export default ({allUsers,handleToggle,handleDelete}) =>{

    allUsers= allUsers.sort()
    
    const Users= allUsers.map((alluser) =>{
        /*TOGGLE BUTTONS*/
     
    const buttonAdmin = (
    <Button variant="dark"  onClick={() =>handleToggle(2,alluser.id)} >add administrator</Button>
    )
    
    const buttonSimpleUser = (
    <Button variant="dark"  onClick={() =>handleToggle(1,alluser.id)} >make a simple user</Button>
    )
    //----------------------------------------------------------------------//
    
    let statusUser = alluser.status
    return (
            <tr>
            <td>{alluser.firstName} </td>
            <td>{alluser.lastName}</td>
            <td>{alluser.email}</td>
            <td>{statusUser===1?buttonAdmin:buttonSimpleUser}</td>
            <td><Button variant="dark"  onClick={() =>handleDelete(alluser.id)}>delete</Button> </td>
            </tr>
        )
    })
            return(
                    <div style={{backgroundColor:"white"}} >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>add administrator</th>
                        <th>delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users} 
                    </tbody>
                </Table>
                </div>
            )
            }
       
       
        



                        
                     

                
                        
                        
                
