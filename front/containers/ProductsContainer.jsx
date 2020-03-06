import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Products from "../components/Products";
import {
  fetchSearchProducts,
  getAllProducts
} from "../actions/searchProductsActions";
import {setCartProducts} from "../actions/cart"
import {loginUser} from "../actions/LoginActions";


const mapStateToProps = function(state) {
  return {
    foundProducts: state.product.list,
    input: state.input.value
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchSearchProducts: input => dispatch(fetchSearchProducts(input)),
    getAllProducts: () => dispatch(getAllProducts()),
    loginUser: user => dispatch(loginUser(user)),
    setCartProducts: (productId, quantity) => dispatch(setCartProducts(productId, quantity))
  };
};

class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this)
  }
  componentDidMount() {
    if (this.props.input) this.props.fetchSearchProducts(this.props.input);
    else this.props.getAllProducts();
    //localstorage para mantenerse logeado
    const emailUser = localStorage.getItem("email");
    const passwordUser = localStorage.getItem("password");

    const data = {
      email: emailUser,
      password: passwordUser
    };

    if (emailUser && passwordUser) {
      this.props.loginUser(data);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.input !== this.props.input) {
      this.props.fetchSearchProducts(this.props.input);
    }
  }
  handleClick(productId, n){
    this.props.setCartProducts(productId, n)
  }

  render() {
    return (
      <div style={{margin: "auto"}}>
        <Products products={this.props.foundProducts} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
