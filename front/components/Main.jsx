import React from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import PaginaPrincipalContainer from "../containers/PaginaPrincipalContainer";
import ProductsContainer from "../containers/ProductsContainer";
import ProductContainer from "../containers/ProductContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import MainPrivate from "../components/MainPrivate"
// import CheckoutContainer from '../containers/CheckoutContainer'
import addAdminContainer from "../containers/addAdminContainer"
import addProductAdminContainer from "../containers/addProductAdminContainer"

import AddReview from "../components/AddReview"

import CheckoutContainer from '../containers/CheckoutContainer'
//import UserContainer from "../containers/UserContainer";
import CarritoContainer from "../containers/CarritoContainer";
import updateProductContainer from "../containers/updateProductContainer"
import AddReviewContainer from "../containers/AddReviewContainer"
import allProductAdmin from "../containers/allProductAdmin"
import {getLoginUser} from "../actions/LoginActions"
import {connect} from "react-redux"
import SuperadminOrdersContainer from "../containers/SuperadminOrdersContainer";


const mapStateToProps= (state)=>{
  return{
    loginUser: state.user.loginUser
  }
}

const mapDispatchToProps = (dispatch)=> {
  return{
    getLoginUser: ()=> dispatch(getLoginUser())
  }
}

class Main extends React.Component {
  constructor(props) {
      super(props)
  }

componentDidMount(){
  this.props.getLoginUser()
}
  render(){
    return (
      <div id="main">
        <NavbarContainer />
        <Switch>/private/modifyProduct
          {/* <Route path="/home" exact component={PaginaPrincipalContainer} /> */}
          <Route path="/products" exact component={ProductsContainer} />
          <Route path="/products/:id" exact component={ProductContainer} />
          <Route path="/users/register" exact component={RegisterContainer} />
          <Route path="/users/login" exact component={LoginContainer} />
          <Route path="/cart" exact component={CarritoContainer} />
          <Route path="/private/modifyProduct" exact component={updateProductContainer} />
          <Route path="/private/orders" exact component={SuperadminOrdersContainer} />
          <Route path="/private/addAdmin" exact component={addAdminContainer} />
          <Route path="/private/addProducts" exact component={addProductAdminContainer} />
          <Route path="/private/getAllProducts" exact component={allProductAdmin} />
          <Route path="/private" exact component={MainPrivate} />
          {/* <Route path="/checkout" exact component={CheckoutContainer} />
          <Route path="/user/:id" exact component={UserContainer} />  */}
  {/* <Route path="/users/myorders" exact component={UserContainer} /> 
          <Route path="/users/myorders" exact component={UserContainer} />   */}
          <Route path="/users/myorders/addReview/:id" component={AddReview} />  
  
          {/* <Route path="/checkout" exact component={CheckoutContainer} /> */}
  

          <Route path="/cart/checkout" exact component={CheckoutContainer} /> 
         
          
          <Route path="/users/myorders/addReview/:id" component={AddReviewContainer} />  

          <Redirect from="/" to="/products" />
        </Switch>
        <FooterContainer/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)