import React from "react";
import Login from "../components/Login";

import { loginUser } from "../actions/LoginActions";
import { getCart } from "../actions/cart"
import { connect } from "react-redux";
import { get } from "http";
import {replaceCart, mergeCart} from "../actions/merge"

const mapDispatchToProps = (dispatch, state) => {
  return {
    loginUser: user => dispatch(loginUser(user)),
    getCart: user => dispatch(getCart(user)),
    mergeCart: (local)=>dispatch(mergeCart(local))
  };
};
const mapStateToProps = (state, ownprops) => {
  return {
    userLogin: state.user.loginUser,
    localstorage: state.localstorage.data
  };
};

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      alertNull: false,
      alertPass: false
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
    if(this.state.password.length === 0 ||this.state.email.length === 0){
      this.setState({alertNull:true})
      this.setState({alertPass:false})
    }else{
      this.props.loginUser(this.state)
        .then(result => {
          if(result.success===false) {
            this.setState({alertPass:true})
            this.setState({alertNull:false})
          } else {
            this.props.getCart()
            .then(cart => {
              console.log(cart)
              if((cart || cart.list.length) && (this.props.localstorage.length)) this.props.history.push("/selectcart")
              else {
                if(this.props.localstorage) this.props.mergeCart(this.props.localstorage)
                this.props.history.push("/products")
              }
            })
          }
  })
  }}

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
          alertNull={this.state.alertNull}
          alertPass={this.state.alertPass}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);