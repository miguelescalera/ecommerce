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
const mapStateToProps = function(state) {
  return {
    foundProducts: state.product.list,
    input: state.input.value,
    loginUser: state.user.loginUser,
    getCart: state.cart.products,
    emailUser: state.user.loginUser.email,
    idUser:state.user.loginUser.id,
    productWithoutUser:state.productWithoutUser.products
  };
};


const mapDispatchToProps = function(dispatch) {
  return {
    fetchSearchProducts: input => dispatch(fetchSearchProducts(input)),
    getAllProducts: () => dispatch(getAllProducts()),
    loginUser: user => dispatch(loginUser(user)),
    setCartProducts: (productId, quantity) => dispatch(modifyCartProduct(productId, quantity)),
    setProductLocalStorage: (productId,quantity) => dispatch(LocalStorageAction(productId,quantity)),
    getCart: () => dispatch(getCart())
  };
};
let arrayOfPO = []
class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getCart()
    if(!this.props.productWithoutUser){
      arrayOfPO=[]
    }
    else{
      arrayOfPO=this.props.productWithoutUser
    }
    if (this.props.input) this.props.fetchSearchProducts(this.props.input);
    else this.props.getAllProducts();
    if(this.props.loginUser) this.props.getCart()
      

    

    //localstorage para mantenerse logeado
    const emailUser = localStorage.getItem("email");
    const passwordUser = localStorage.getItem("password");
    const data = {
      email: emailUser,
      password: passwordUser
    };
    //////SE LOGUEA E USUARIO AUTOMATICAMENTE////////
    if (emailUser && passwordUser) {
      function fetchProductsUser(){
        let products = JSON.parse(localStorage.getItem("products")) 
          if(products){
            for(let i=0;i<products.length;i++){ 
              let productId=products[i].idProduct
              let producQuantity= products[i].quantity
              this.props.setCartProducts(productId,producQuantity)
            }
            localStorage.removeItem("products")
          }
             
        }
        fetchProductsUser = fetchProductsUser.bind(this)
        this.props.loginUser(data)
        .then(()=> fetchProductsUser()())
        .then(()=> this.props.getCart())
      }
       
        
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
  handleClick(productId, n){
    if(!this.props.emailUser){
      let ProductOutline= {idProduct:0,quantity:1} // creo el arreglo que voy a usar para guardar la data en el localStorage
      let cond=arrayOfPO.some((obj) =>{return obj.idProduct===productId})//creo el condicional
        if(cond){
          arrayOfPO.filter(function(obj){ if(obj.idProduct===productId){ obj.quantity+=1}})//sumo la cantidad
        }
        else{
          let newProduct={...ProductOutline}
          newProduct.idProduct=productId
          arrayOfPO.push(newProduct)// pusheo un nuevo producto
        }
        localStorage.setItem("products",JSON.stringify(arrayOfPO)) 
      }
    else{
        this.props.setCartProducts(productId, n)
        this.props.getCart()
      }    
    }   
  render() {
    return (
      <div>
        <h3 className="d-flex justify-content-center" style={{ marginBlockStart:"1rem"}}>Resultado de la busqueda</h3>
        <Products products={this.props.foundProducts} handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
