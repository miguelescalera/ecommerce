import React from "react";
import Login from "../components/Login";

import {loginUser} from "../actions/LoginActions";
import {getCart} from "../actions/cart"

import { connect } from "react-redux";
const mapDispatchToProps = (dispatch, state) => {
  return { 
    loginUser: user => dispatch(loginUser(user)),
    getCart: user => dispatch(getCart(user))
   };
};
const mapStateToProps = (state, ownprops) => {
  return {
    userLogin: state.user.loginUser
  };
};

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      alert: false
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  }

  handlerSubmit(e) {
    e.preventDefault();
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    this.props.loginUser(this.state)
    .then(user => {
      if(user.email){
        this.props.getCart()
        this.props.history.push("/products")
      }else{
        this.setState({alert: true})
      }
    })
  }

  // componentDidUpdate(prevProps){
  //   if (this.props.userLogin.email) {
  //     this.props.history.push("/products");
  //   } else {
  //     this.setState({alert: true})
  //   }
  // }

  render() {
    return (
      <div>

        <Login
          handlerChange={this.handlerChange}
          handlerSubmit={this.handlerSubmit}
          alert={this.state.alert}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);