import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import PaginaPrincipalContainer from "../containers/PaginaPrincipalContainer";
import ProductsContainer from "../containers/ProductsContainer";
import ProductContainer from "../containers/ProductContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import CheckoutContainer from '../containers/CheckoutContainer'
// import UserContainer from "../containers/UserContainer";
import CarritoContainer from "../containers/CarritoContainer";
import UserPrivateContainer from "../containers/UserPrivateContainer";
import superAdminContainer from "../containers/superAdminContainer";

export default () => {
  return (
    <div id="main">
      <NavbarContainer />
      <Switch>
        {/* <Route path="/home" exact component={PaginaPrincipalContainer} /> */}
        <Route path="/products" exact component={ProductsContainer} />
        <Route path="/products/:id" component={ProductContainer} />
        <Route path="/users/register" exact component={RegisterContainer} />
        <Route path="/users/login" exact component={LoginContainer} />
        <Route path="/cart" exact component={CarritoContainer} />
        {/* <Route path="/users/myorders" exact component={UserContainer} /> */}
        <Route path="/private/orders" exact component={UserPrivateContainer} />
        <Route path="/private" exact component={superAdminContainer} />
        <Route path="/checkout" exact component={CheckoutContainer} />
        {/* <Route path="/user/:id" exact component={UserContainer} />  */}

        <Redirect from="/" to="/products" />
      </Switch>
      <FooterContainer />
    </div>
  );
};
