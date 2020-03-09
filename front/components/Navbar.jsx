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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbars = function({
  handleSubmit,
  handleChange,
  emailUser,
  dispatchLogout,
  redirect
}) {
  let displayRegister = {
    nada: "nada"
  };
  /////////boton login////////
  let userLogin = (
    <Link to="/users/login">
      <Nav style={fontNavBar}><FontAwesomeIcon icon={faUser}/> Login</Nav>
    </Link>
  );
  ///////////////////////////////////////////
  /*boton logout*/

  if (emailUser) {
    const handleLogout = function() {
      axios.post("/logout").then(function() {
        localStorage.clear();
        dispatchLogout();
        displayRegister = {
          display: "none"
        };
      }).then(res => redirect())
    };
    userLogin = (
        <Nav.Link style={fontNavBar} onClick={handleLogout}>
          <FontAwesomeIcon icon={faUser}/> Logout
        </Nav.Link>
    );
  }

  //////////////////////////////////////////////

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
    display: "flex",
    alignItems: "center"
  };

  const downRowNav = {
    backgroundColor: "#F8F8FF",
    height: "40px",
    display: "flex",
    alignItems: "center"
  };

  const fontNavBar = {
    color: "#808080"
  };

  return (
    <div>
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
          <Link style={fontNavBar} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/> Cart 
          </Link>
        </Col>
        <Col md="auto">{userLogin}</Col>
        <Col md="auto">
          <Link to="/users/register">
          <Nav.Link href="#usuario" style={fontNavBar}>
              <FontAwesomeIcon icon={faUserPlus}/>
              Register
            </Nav.Link>
          </Link>
        </Col>
      </Row>

      {/* SEGUNDA ROW DE NAVBAR CON BUSCAR POR BODEGA/CATEGORIAS/ORDENARPOR */}

      <Row className="justify-content-md-center" style={downRowNav}>
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
              <Dropdown.Item href="#/action-1">Finca Victoria</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Cosecha Pugliese</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Escalera Mendoza</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col md="auto">
          <Nav.Link href="#tintos" style={fontNavBar}>
            Tintos
          </Nav.Link>
        </Col>

        <Col md="auto">
          <Nav.Link href="#Blancos" style={fontNavBar}>
            Blancos
          </Nav.Link>
        </Col>

        <Col md="auto">
          <Nav.Link href="#Rosados" style={fontNavBar}>
            Rosados
          </Nav.Link>
        </Col>

        <Col md="auto">
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
        </Col>
      </Row>
    </div>
  );
};

export default Navbars;
