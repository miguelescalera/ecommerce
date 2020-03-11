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
import superAdminContainer from "../containers/superAdminContainer"
import AddReview from "../components/AddReview"
import {getLoginUser} from "../actions/LoginActions"
import {connect} from "react-redux"
import OrdenesContainerPrivate from "../containers/OrdenesContainerPrivate";
import UserPrivateContainer from "../containers/UserPrivateContainer";



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
    console.log("USER", this.props.loginUser)
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
  
          <Route path="/private" exact component={superAdminContainer} />
          <Route path="/private/orders" exact component={UserPrivateContainer} />

          {/* <Route path="/checkout" exact component={CheckoutContainer} />
          <Route path="/user/:id" exact component={UserContainer} />  */}
  {/* 
          <Route path="/users/myorders" exact component={UserContainer} />   */}
          <Route path="/users/myorders/addReview/:id" component={AddReview} />  
  
          {/* <Route path="/checkout" exact component={CheckoutContainer} /> */}
  
          <Redirect from="/" to="/home" />
        </Switch>
        <FooterContainer/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)