import React from 'react'
import Carrito from '../components/Carrito'
import TarjetaCompra from "../components/TarjetaCompra"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from "react-redux"
import {getCart, setCartProducts} from "../actions/cart"
import LocalStorageAction from "../actions/LocalStorageActions"

let Finalproducts=new Array;
const mapStateToProps = function(state) {
    return {
      allProducts: state.product.list, 
      products: state.cart.products,
      loading: state.cart.loading,
      loginUser: state.user.loginUser,
      emailUser: state.user.loginUser.email,
      idUser:state.user.loginUser.id,
      productWithoutUser:state.productWithoutUser
    };
  };
  
  const mapDispatchToProps = function(dispatch) {
    return {
      getCart: (userId) => dispatch(getCart(userId)),
      setCartProducts: (productId, quantity) => dispatch(setCartProducts(productId, quantity)),
      setProductLocalStorage: (productId,quantity) => dispatch(LocalStorageAction(productId,quantity))
    };
  };
  

class CarritoContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orderProduct: {}
        }
        this.handleClick = this.handleClick.bind(this)
    }

componentDidMount(){
    /*ANTES DE REDENRIZAR EL COMPONENTE PREGUNTO SI EL USUARIO ESTA LOGUEADO*/
    /*SI NO ESTA LOGUEADO TOMO LOS PRODUCTOS QUE HALLA SELECCIONADO,GUARDADOS EN EL LOCALSTORAGE*/
    if(this.props.emailUser){
        this.props.getCart(this.props.idUser)
    }
    else{
        let productsOffline = JSON.parse(localStorage.getItem("products")) 
        let AllProducts= this.props.allProducts
        
        if(productsOffline){
            let products = productsOffline.map(function(prd){
                return AllProducts.filter(function(finalProd){
                   if(prd.idProduct=== finalProd.id){
                        finalProd.quantity=prd.quantity
                        return finalProd
            
                   }
                })
            })

            for(let i=0; i<products.length;i++){
                for(let j=0; j<products[i].length;j++){
                    Finalproducts.push(products[i][j])
                }
            }
        }
    }
}
           
           
    



componentWillUnmount(){
    Finalproducts=[]
}
/*
componentDidUpdate(prevProps){
    // if (prevProps.loginUser.id !== this.props.loginUser.id) {
        this.props.getCart()
        // console.log("user")

componentDidUpdate(prevProps, prevState){
    // console.log(prevState.orderProduct.id)
    // console.log(this.state.orderProduct.id)
    // if(prevState.orderProduct.id !== this.state.orderProduct.id || prevState.orderProduct.quantity !== this.state.orderProduct.id){
    //     this.props.getCart()

    // }
    // NO LO PUEDO HACER EN EL ESTADO PORQ SE ME REINICIA; TENGO QUE PONER EN EL STORE EL ULTIMO CLIQUEADO
}
*/

handleClick(productId, n){

    if(this.props.emailUser){
        this.props.setCartProducts(productId, n)
        this.props.getCart()
    }
    else{
        let productsClick= JSON.parse(localStorage.getItem("products"))
        productsClick.filter(function(obj){ if(obj.idProduct===productId){ obj.quantity+=n}})
        localStorage.setItem("products",JSON.stringify(productsClick))
        this.props.setProductLocalStorage(JSON.parse(localStorage.getItem("products")))
        }
    }
        
          
        
              
        



render()
{
    const products =this.props.emailUser?this.props.products:Finalproducts
    return(
        <div>
            <Container> 
                <Row>
                    <Col sm={8}>
                    <TarjetaCompra productos={products} handleClick={this.handleClick} />
                    </Col>
                    <Col sm={4}>
                    <Carrito products={products}  />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}
   
export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer)
       
   
    

    
    
    
    


        

  



