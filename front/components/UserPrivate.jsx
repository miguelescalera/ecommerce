import React from "react";
import Card from 'react-bootstrap/Card'


const User = function ({user}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Hola, {user.firstName+" "+user.lastName}</Card.Title>
                    <Card.Text>Email: {user.email}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};
export default User;