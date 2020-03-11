import React from "react";
import Card from 'react-bootstrap/Card'


const User = function () {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Hola, Usuario</Card.Title>
                    <Card.Text>Nombre:Usuario Fake</Card.Text>
                    <Card.Text>Email: usuario@fake.com</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};
export default User;