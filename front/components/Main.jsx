import React from 'react'
import { Route, Redirect, Switch, Link } from "react-router-dom";
 import NavbarContainer from '../containers/NavbarContainer'
// import FooterContainer from '../containers/FooterContainer'
import PaginaPrincipalContainer from '../containers/PaginaPrincipalContainer'
 import ProductsContainer from '../containers/ProductsContainer'
 import ProductContainer from '../containers/ProductContainer'
 import RegisterContainer from '../containers/RegisterContainer'
 import CarritoContainer from '../containers/CarritoContainer'
// import CheckoutContainer from '../containers/CheckoutContainer'
// import UserContainer from '../containers/UserContainer'

export default ()=>{

    return(
        <div id='main'>
             <NavbarContainer/> 
            <Switch>
            <Route path="/home" exact component={PaginaPrincipalContainer} />
            <Route path="/products" exact component={ProductsContainer} />
             {/* {/*<Route path="/product/:id" exact component={ProductContainer} /> */}
             <Route path="/users/register" exact component={RegisterContainer} />
             {/* <Route path="/cart" exact component={CarritoContainer} />
             <Route path="/checkout" exact component={CheckoutContainer} />
             <Route path="/user/:id" exact component={UserContainer} />  */}
             

            {/* <Redirect from="/" to="/home" /> */}
            </Switch>
            {/* <FooterContainer/> */}


        </div>

    )
}

