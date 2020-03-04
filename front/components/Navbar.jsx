import React from "react"
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Navbars=function({handleSubmit,handleChange}){
   

    return(
           <div>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            <Link to="users/register">  
                <Nav.Link to="users/register">Register</Nav.Link>
            </Link>
                </Nav>
                    <Form onSubmit={handleSubmit} inline>   {/*aca esta el handle submit*/}
                    <FormControl onChange={handleChange} type="text" placeholder="Search" className="mr-sm-2" />{/*el formulario no esta siendo controlado del todo, igual deberia funcionar*/}
                    <Button variant="outline-light">Search</Button>
                    </Form>
              </Navbar>
           </div> 
    )
}

export default Navbars