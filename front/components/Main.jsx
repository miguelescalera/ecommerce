import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import PaginaPrincipalContainer from "../containers/PaginaPrincipalContainer";
import ProductsContainer from "../containers/ProductsContainer";
import ProductContainer from "../containers/ProductContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
// import CheckoutContainer from '../containers/CheckoutContainer'
import UserContainer from "../containers/UserContainer";
import CarritoContainer from "../containers/CarritoContainer";
<<<<<<< HEAD
import superAdminContainer from "../containers/superAdminContainer"
import AddReview from "../components/AddReview"
=======

import UserPrivateContainer from "../containers/UserPrivateContainer";
import superAdminContainer from "../containers/superAdminContainer";

>>>>>>> 4d6dd7f9442ed54d6bb0b1f565d82abe0f49a851

export default () => {
  return (
    <div id="main">
      <NavbarContainer />
      <Switch>
        <Route path="/home" exact component={PaginaPrincipalContainer} />
        <Route path="/products" exact component={ProductsContainer} />
        <Route path="/products/:id" component={ProductContainer} />
        <Route path="/users/register" exact component={RegisterContainer} />
        <Route path="/users/login" exact component={LoginContainer} />
        <Route path="/cart" exact component={CarritoContainer} />

        <Route path="/users/myorders" exact component={UserContainer} />
        <Route path="/private/orders" exact component={UserPrivateContainer} />

        <Route path="/private" exact component={superAdminContainer} />
        {/* <Route path="/checkout" exact component={CheckoutContainer} />
        <Route path="/user/:id" exact component={UserContainer} />  */}

<<<<<<< HEAD
        <Route path="/users/myorders" exact component={UserContainer} />  
        <Route path="/users/myorders/addReview/:id" exact component={AddReview} />  
=======

        <Route path="/users/myorders" exact component={UserContainer} />

>>>>>>> 4d6dd7f9442ed54d6bb0b1f565d82abe0f49a851

        {/* <Route path="/checkout" exact component={CheckoutContainer} /> */}


        <Redirect from="/" to="/products" />
      </Switch>
      <FooterContainer />
    </div>
  );
};
