import React from "react";
import Navbars from "../components/Navbar";
import LocalStorageAction from "../actions/LocalStorageActions"
import { connect } from "react-redux";
import { setInput } from "../actions/search";
import { withRouter } from "react-router-dom";
import {logoutUser} from "../actions/LoginActions";
import {fetchSearchProducts} from "../actions/searchProductsActions"
import {resetCart} from "../actions/cart"
import {getCategories} from "../actions/categories"
import {getBrands} from "../actions/brands"
import {getAllProducts} from "../actions/searchProductsActions"

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleProducts = this.handleProducts.bind(this)
  }
  componentDidMount(){
    this.props.getCategories()
    this.props.getBrands()
  }
  handleChange(event){
    this.setState({ input:event.target.value})

  }
  handleSubmit(event){
    event.preventDefault()
    this.props.setInput(this.state.input)
    this.props.getProducts(this.state.input) 

    this.props.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario
  }

  handleLogout(){
    this.props.logoutUser()
    this.props.resetCart()
    localStorage.setItem("products",JSON.stringify([]))
    this.props.history.push("/products")
  }
  handleFilter(value){
    this.props.getProducts(value)
    this.props.setInput(value)
    this.props.history.push('/products')
  }
  handleProducts(){
    this.props.getAllProducts()
    this.props.history.push('/products')
  }
  handleFilter(value){
    this.props.getProducts(value)
    this.props.setInput(this.state.input)
    this.props.history.push('/products')
  }
  handleProducts(){
    this.props.getAllProducts()
    this.props.history.push('/products')
  }


  render() {
    return (
      <div>
        <Navbars
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          emailUser={this.props.email}
          handleLogout={this.handleLogout}
          redirect = {this.redirect}
          categories = {this.props.categories}
          brands = {this.props.brands}
          handleFilter={this.handleFilter}
          handleProducts={this.handleProducts}
        />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    foundProducts: state.foundProducts,
    email: state.user.loginUser.email,
    categories: state.nav.categories,
    brands: state.nav.brands
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setProductLocalStorage: () => dispatch(LocalStorageAction([])),
    setInput: input => dispatch(setInput(input)),
    logoutUser: () => dispatch(logoutUser()),
    getProducts: (input)=> dispatch(fetchSearchProducts(input)),
    resetCart: ()=> dispatch(resetCart()),
    getBrands: ()=> dispatch(getBrands()),
    getCategories: ()=> dispatch(getCategories()),
    getAllProducts: ()=>dispatch(getAllProducts())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)
);
