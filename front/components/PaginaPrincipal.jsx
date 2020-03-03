import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default ({ }) => {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    Aqui va a estar nuestro ecommerce wineNot por que no? por que si.
                </p>
                <p>
                    <Button variant="primary">No Hago Nada</Button>
                </p>
            </Jumbotron>
        </div>
    )
}