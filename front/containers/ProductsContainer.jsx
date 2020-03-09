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
import LocalStorageAction from "../actions/LocalStorageActions"




const mapStateToProps = function(state) {
  return {
    foundProducts: state.product.list,
    input: state.input.value,
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
    setProductLocalStorage: (productId,quantity) => dispatch(LocalStorageAction(productId,quantity)),
    /*setCartProducts NO NECESITA DISPATCH, revisarlo con tiempo(igual funciona)*/
    setCartProducts: (productId, quantity,userId) => dispatch(setCartProducts(productId, quantity,userId))
  };
};

let arrayOfPO = []


class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this)
  }
  componentDidMount() {
    if(!this.props.productWithoutUser){
      arrayOfPO=[]
    }
    else{
      arrayOfPO=this.props.productWithoutUser
    }
      

    console.log("arrayOfPO:",arrayOfPO)
    if (this.props.input) this.props.fetchSearchProducts(this.props.input);
    else this.props.getAllProducts();
    //localstorage para mantenerse logeado
    const emailUser = localStorage.getItem("email");
    const passwordUser = localStorage.getItem("password");

    const data = {
      email: emailUser,
      password: passwordUser
    };
    //////SE LOGUEA E USUARIO AUTOMATICAMENTE////////
    if (emailUser && passwordUser) {
      const loginUser= this.props.loginUser

    ////////// SE FECHEAN LOS PRODUCTOS DEL LOCALSTORAGE ////
        function fetchProductsUser(){
          const IdUser=this.props.idUser
          
              let products = JSON.parse(localStorage.getItem("products")) 
                  if(products){
                    for(let i=0;i<products.length;i++){ // si queda tiempo buscar metodo de array que pueda reemplazar este for
                      console.log("USER ID:",IdUser)
                      let productId=products[i].idProduct
                      let producQuantity= products[i].quantity
                      this.props.setCartProducts(productId,producQuantity,IdUser)
                    }
                    localStorage.removeItem("products")
                  }
                }
              fetchProductsUser = fetchProductsUser.bind(this)
                     

      ////// SE LOGUEA EL USUARIO Y DESPUES SE HACE EL FETCH////////
       loginUser(data)
       .then(function(){
        fetchProductsUser()
       })
    
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
        
        this.props.setCartProducts(productId, n,this.props.idUser)
      }    
    }
      
          
    

  render() {
    return (
      <div>
        <h3 className="d-flex justify-content-center" style={{marginBlockEnd:"1rem", marginBlockStart:"1rem"}}>Resultado de la busqueda</h3>
        <Products products={this.props.foundProducts} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);







