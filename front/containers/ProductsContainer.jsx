import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import {
  fetchSearchProducts,
  getAllProducts
} from "../actions/searchProductsActions";
import {modifyCartProduct, getCart} from "../actions/cart"
import {loginUser} from "../actions/LoginActions";
import LocalStorageAction from "../actions/LocalStorageActions"
import {setLocalStorage} from "../actions/localStorage"

const mapStateToProps = function(state) {
  return {
    foundProducts: state.product.list,
    input: state.input.value,
    loginUser: state.user.loginUser,
    cart: state.cart.products,
    emailUser: state.user.loginUser.email,
    idUser:state.user.loginUser.id,
    localstorage: state.localstorage.data
  };
};


const mapDispatchToProps = function(dispatch) {
  
  return {
    fetchSearchProducts: input => dispatch(fetchSearchProducts(input)),
    getAllProducts: () => dispatch(getAllProducts()),
    loginUser: user => dispatch(loginUser(user)),
    setCartProducts: (productId, quantity) => dispatch(modifyCartProduct(productId, quantity)),
    setProductLocalStorage: (productId,quantity) => dispatch(LocalStorageAction(productId,quantity)),
    getCart: () => dispatch(getCart()),
    setLocalStorage: (data) => dispatch(setLocalStorage(data))
  };
};
let arrayOfPO = []
class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this)
  }
  componentDidMount() {
    if (this.props.input) this.props.fetchSearchProducts(this.props.input);
    else this.props.getAllProducts();
    if(this.props.loginUser) this.props.getCart()
        
  }
  componentDidUpdate(prevProps) {
    if (prevProps.input !== this.props.input) {
      this.props.fetchSearchProducts(this.props.input);
      
    }
  }
  componentWillUnmount(){
    this.props.setProductLocalStorage(JSON.parse(localStorage.getItem("products")))
    arrayOfPO=[]
}
  handleClick(productId, n){
    this.props.setCartProducts(productId, n)
    this.props.getCart()
  }
  handleClick(id, n, name, price, stock, imgUrl){
    if(!this.props.emailUser){
      let product = {
        id,
        name,
        price,
        stock,
        imgUrl,
        quantity: n,
        totalPrice: Number(n * price)
      }
      let products = this.props.localstorage
      if(products.some((obj) =>{return obj.id===product.id})){
        products.filter(function(obj){ 
          if(obj.id===product.id){ 
            obj.quantity+=n
            obj.totalPrice += Number(n * obj.price)
          }})
      }else{
        products.push(product)
      }
      this.props.setLocalStorage(products)
      localStorage.setItem("products",JSON.stringify(products))
      }
    else{
        this.props.setCartProducts(id, n)
        this.props.getCart()
      }    
    }   
  render() {
    console.log("RENDER:", this.props.emailUser)
    return (
      <div>
        <h3 className="d-flex justify-content-center" style={{ marginBlockStart:"1rem"}}>Resultado de la busqueda</h3>
        <Products products={this.props.foundProducts} handleClick={this.handleClick} cart={this.props.cart}/>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
