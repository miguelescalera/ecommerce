import React from 'react'
import Carrito from '../components/Carrito'
import TarjetaCompra from "../components/TarjetaCompra"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from "react-redux"
import {getCart, modifyCartProduct, deleteCartProduct} from "../actions/cart"
import LocalStorageAction from "../actions/LocalStorageActions"
let Finalproducts=new Array;
const mapStateToProps = function(state) {
    return {
      allProducts: state.product.list, 
      products: state.cart.products,
      order: state.cart.order,
      loginUser: state.user.loginUser,
      modifiedProduct : state.cart.modifiedProduct,
      emailUser: state.user.loginUser.email,
      idUser:state.user.loginUser.id,
      productWithoutUser:state.productWithoutUser
    };
  };
  
      
  
  const mapDispatchToProps = function(dispatch) {
    return {
      getCart: () => dispatch(getCart()),
      modifyCartProduct: (productId, quantity) => dispatch(modifyCartProduct(productId, quantity)),
      deleteCartProduct: (productId) => dispatch(deleteCartProduct(productId)),
      setProductLocalStorage: (productId,quantity) => dispatch(LocalStorageAction(productId,quantity))
    };
  };
  

class CarritoContainer extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }

componentDidMount(){
    if(this.props.emailUser){
        this.props.getCart()
        console.log('hola')
    }
    else{
        let productsOffline = JSON.parse(localStorage.getItem("products")) 
        console.log('holaaaaaaaaa',productsOffline)
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
            

componentDidUpdate(prevProps, prevState){
    console.log(prevProps.modifiedProduct)
    console.log(this.props.modifiedProduct)
    if(prevProps.modifiedProduct.quantity !== this.props.modifiedProduct.quantity || prevProps.modifiedProduct.id !== this.props.modifiedProduct.id){
        this.props.getCart()
    }
    if(prevProps.modifiedProduct.id !== this.props.modifiedProduct.id ){
        this.props.getCart()
    }
}
componentWillUnmount(){
    Finalproducts=[]
}
handleClick(productId, n){
    if(this.props.emailUser){
        this.props.modifyCartProduct(productId, n)
        this.props.getCart()
    }
    else{
        let productsClick= JSON.parse(localStorage.getItem("products"))
        productsClick.filter(function(obj){ if(obj.idProduct===productId){ obj.quantity+=n}})
        localStorage.setItem("products",JSON.stringify(productsClick))
        this.props.setProductLocalStorage(JSON.parse(localStorage.getItem("products")))
    }
}
handleDelete(productId){
    this.props.deleteCartProduct(productId)
}
render(){
    const order = this.props.order
    const products =this.props.emailUser?this.props.products:Finalproducts
    console.log(order)
    console.log(products)
    return( 
        <div>
            <Container> 
                <Row>
                    <Col sm={8}>
                    <TarjetaCompra productos={products} handleClick={this.handleClick} handleDelete={this.handleDelete} />
                    </Col>
                    <Col sm={4}>
                    <Carrito products={products} order={order} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
}  
export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer)

  



