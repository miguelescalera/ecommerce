import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import axios from "axios";

//CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const Navbars = function({
  handleSubmit,
  handleChange,
  emailUser,
  handleLogout,
  categories,
  brands,
  handleFilter,
  handleProducts
}) {
  /////////boton login////////
  let userLogin = (
    <Link to="/users/login">
      <Nav style={fontNavBar}>
        <FontAwesomeIcon icon={faUser} /> Login
      </Nav>
    </Link>
  );
  ///////////////////////////////////////////
  /*boton logout*/
  let userLogout = (
    <Nav.Link style={fontNavBar} onClick={handleLogout}>
      <FontAwesomeIcon icon={faUser} /> Logout
    </Nav.Link>
  );

  //////////////////////////////////////////////
  let userRegister = (
    <Link to="/users/register">
      <Nav.Link href="#usuario" style={fontNavBar}>
        <FontAwesomeIcon icon={faUserPlus} />
        Register
      </Nav.Link>
    </Link>
  );
  ///////////////////////////////////////////////
  let userMyOrders = (
    <Link to="/users/myorders">
      <Nav.Link href="#usuario" style={fontNavBar}>
        <FontAwesomeIcon icon={faUserPlus} />
        My Orders
      </Nav.Link>
    </Link>
  );
  /////////////////////////////////////////////////

  const DropdownStyle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      style={fontNavBar}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const upRowNav = {
    backgroundColor: "#DCDCDC",
    height: "120px",
    width:'100%' ,
    display: "flex",
    alignItems: "center",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',


  };

  const downRowNav = {
    backgroundColor: "#F8F8FF",
    height: "40px",
    width:'100%',
    display: "flex",
    alignItems: "center",
    boxShadow :'8px 8px 15px -10px rgba(0,0,0,0.39)',


  };

  const fontNavBar = {
    color: "#808080"
  };

  return (
    <div >
      {/* PRIMERA ROW DE NAVBAR CON LOGO/BUSQUEDA/CARRITO Y USER */}
      <Row className="justify-content-md-center" style={upRowNav}>
        <Col md="auto">
          <Link to="/home">
            <Image
              width={120}
              height={120}
              src={"https://i.imgur.com/mB0e6a4.png"}
            />
          </Link>
        </Col>
        <Col md="auto">
          <Form inline type="submit" onSubmit={handleSubmit}>
            {" "}
            {/*aca esta el handle submit*/}
            <FormControl
              onChange={handleChange}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            {/*el formulario no esta siendo controlado del todo, igual deberia funcionar*/}
            <Button variant="dark" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Col>
        <Col md="auto">
          <Link to="/cart">
            <Nav>
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} /> Cart{" "}
            </Nav>
          </Link>
          
        </Col>
        <Col md="auto">{emailUser ? userLogout : userLogin}</Col>
        <Col md="auto">{emailUser ? userMyOrders : userRegister}</Col>

        <Col md="auto">
          <Link to="/private">
            <Nav >
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} /> super Admin{" "}
            </Nav>
          </Link>
        </Col>


        

      </Row>

      {/* SEGUNDA ROW DE NAVBAR CON BUSCAR POR BODEGA/CATEGORIAS/ORDENARPOR */}

      <Row className="justify-content-md-center" style={downRowNav}>
        

        <Col md="auto">
          <Nav style={fontNavBar}  onClick={handleProducts}>
            <Link style={fontNavBar}> Todos los productos </Link> 
          </Nav>
        </Col>

        <Col md="auto">
          <Dropdown>
            <Dropdown.Toggle
              as={DropdownStyle}
              id="dropdown-basic"
              style={fontNavBar}
              >
              Buscar por bodega
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {brands.map(brand=>{
                return <Dropdown.Item onClick={()=>handleFilter(brand.name)}>{brand.name}</Dropdown.Item>
            })}
            </Dropdown.Menu>
          </Dropdown>
              </Col>
       
              <Col md="auto">
        <Dropdown>
            <Dropdown.Toggle
              as={DropdownStyle}
              id="dropdown-basic"
              style={fontNavBar}
              >
              Buscar por categoria
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categories.map(category=>{
                return <Dropdown.Item onClick={()=>handleFilter(category.name)}>{category.name}</Dropdown.Item>
              })
              }
            </Dropdown.Menu>
          </Dropdown>
              </Col>
        


        {/* <Col md="auto">
          <Dropdown style={fontNavBar}>
            <Dropdown.Toggle as={DropdownStyle} id="dropdown-basic">
              Ordenar por
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Precio: mayor a menor
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Precio: menor a mayor
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col> */}
      </Row>
    </div>
  );
};

export default Navbars;
