import React from "react";
import Card from 'react-bootstrap/Card'


const User = function ({user}) {
    
    const itemPriContStyles = {
        paddingBlockStart:'3rem',
        paddingTopStart:'1rem',
      width:'400px',
      textAlign:'center',
      boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',

    }
    return (
        <div style={itemPriContStyles}>
            <Card >
                <Card.Body>
                    <Card.Title>Hola, {user.firstName+" "+user.lastName}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};
export default User;