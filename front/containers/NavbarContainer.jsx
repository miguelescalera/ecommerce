import React from "react";
import Navbars from "../components/Navbar";
import LocalStorageAction from "../actions/LocalStorageActions"
import { connect } from "react-redux";
import { setInput } from "../actions/search";
import { withRouter } from "react-router-dom";
import {logoutUser} from "../actions/LoginActions";
import {fetchSearchProducts} from "../actions/searchProductsActions"
import {resetCart} from "../actions/cart"

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleChange(event){
    this.setState({ input:event.target.value})
    console.log(this.state.input)

  }
  handleSubmit(event){
    console.log("Click")
    event.preventDefault()
    this.props.getProducts(this.state.input) 
    this.props.redirect.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario
  }

  handleLogout(){
    this.props.logoutUser()
    this.props.resetCart()
  }


  render() {
    return (
      <div>
        <Navbars
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          emailUser={this.props.email}

          dispatchLogout={()=> {
            this.props.setProductLocalStorage()
            this.props.resetCart()
            this.props.dispatchLogout()}}

          handleLogout={this.handleLogout}

          redirect = {this.redirect}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    foundProducts: state.foundProducts,
    email: state.user.loginUser.email
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setProductLocalStorage: () => dispatch(LocalStorageAction([])),
    setInput: input => dispatch(setInput(input)),
    logoutUser: () => dispatch(logoutUser()),
    getProducts: (input)=> dispatch(fetchSearchProducts(input)),
    resetCart: ()=> dispatch(resetCart())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
