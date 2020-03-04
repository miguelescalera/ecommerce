import React from "react"
import Navbar from 'react-bootstrap/Navbar'


const Navbars=function({handleSubmit,handleChange}){
   

    return(
           <div>
               <h1>aca deberia ir el nabvar</h1>
              <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
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