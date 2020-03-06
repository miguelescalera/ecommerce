import React from "react";
import Navbars from "../components/Navbar";

import { connect } from "react-redux";
import { setInput } from "../actions/search";
import { withRouter } from "react-router-dom";
<<<<<<< HEAD
import {addLogin} from "../actions/LoginActions";
=======
import {loginUser} from "../actions/LoginActions";
>>>>>>> e591642dcb690f35e41c70ab5722fd99711db654
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
    this.redirect = this.redirect.bind(this)
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
  redirect(){
    this.props.redirect.history.push('/products')
  }


  render() {
    return (
      <div>
        <Navbars
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          emailUser={this.props.email}
          dispatchLogout={()=> {
            this.props.resetCart()
            this.props.dispatchLogout()}}
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
    setInput: input => dispatch(setInput(input)),
<<<<<<< HEAD
    dispatchLogout: () => dispatch(addLogin({})),
    getProducts: (input)=> dispatch(fetchSearchProducts(input)),
    resetCart: ()=> dispatch(resetCart())
=======
    dispatchLogout: () => dispatch(loginUser("")),
    getProducts: (input)=> dispatch(fetchSearchProducts(input))
>>>>>>> e591642dcb690f35e41c70ab5722fd99711db654
  };
};



export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
