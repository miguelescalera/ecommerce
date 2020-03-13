import React from 'react'
import Carrito from '../components/Carrito'
import TarjetaCompra from "../components/TarjetaCompra"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from "react-redux"
import {getCart, modifyCartProduct, deleteCartProduct, setCartProduct} from "../actions/cart"
import LocalStorageAction from "../actions/LocalStorageActions"
import {getAllProducts} from "../actions/searchProductsActions"
import {setLocalStorage} from "../actions/localStorage"

let Finalproducts=new Array;
const mapStateToProps = function(state) {
    return {
      allProducts: state.product.list, 
      products: state.cart.products,
      order: state.cart.order,
      logged: state.user.logged,
      modifiedProduct : state.cart.modifiedProduct,
      idUser:state.user.loginUser.id,
      productWithoutUser:state.productWithoutUser,
      localstorage : state.localstorage.data
    };
  };

  
  const mapDispatchToProps = function(dispatch) {
    return {
      getCart: () => dispatch(getCart()),
      getAllProducts: ()=> dispatch(getAllProducts()),
      modifyCartProduct: (productId, quantity) => dispatch(modifyCartProduct(productId, quantity)),
      deleteCartProduct: (productId) => dispatch(deleteCartProduct(productId)),
      setProductLocalStorage: (productId,quantity) => dispatch(LocalStorageAction(productId,quantity)),
      setCartProduct: (product) => dispatch(setCartProduct(product)),
      setLocalStorage: (data) => dispatch(setLocalStorage(data))
    };
};


class CarritoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.toCheckout = this.toCheckout.bind(this)
    }


componentDidMount(){
        this.props.getCart()
        this.props.setLocalStorage(JSON.parse(localStorage.getItem("products")))
 }


    componentDidUpdate(prevProps, prevState) {
            if (prevProps.modifiedProduct.quantity !== this.props.modifiedProduct.quantity || prevProps.modifiedProduct.id !== this.props.modifiedProduct.id) {
                if(this.props.logged) this.props.getCart()
                else this.props.setLocalStorage(JSON.parse(localStorage.getItem("products")))
            }
            if (prevProps.modifiedProduct.id !== this.props.modifiedProduct.id) {
                if(this.props.logged) this.props.getCart()
                else this.props.setLocalStorage(JSON.parse(localStorage.getItem("products")))
            }
            if (prevProps.modifiedProduct.deleted !== this.props.modifiedProduct.deleted) {
                if(this.props.logged) this.props.getCart()
                else this.props.setLocalStorage(JSON.parse(localStorage.getItem("products")))
            }
    }

    handleDelete(productId, name, price, stock, imgUrl) {
        if(this.props.logged) this.props.deleteCartProduct(productId)
        else{
            let products = this.props.localstorage
            let products2 = products.filter(product =>{
                return product.id !== productId
            })
            this.props.setLocalStorage(products2)
            localStorage.setItem("products",JSON.stringify(products))
        }
    }

    toCheckout(){
        this.props.history.push("/cart/checkout")
    }

    componentWillUnmount(){
        Finalproducts=[]
    }

    handleClick(productId, n, name, price, stock, imgUrl){
    if(this.props.logged){
        this.props.modifyCartProduct(productId, n)
    }
    else{
        let product = {
            id: productId,
            name,
            price,
            stock,
            imgUrl,
            quantity: n,
            totalPrice: Number(n * price)
          }
          this.props.setCartProduct(product)
          let products = this.props.localstorage
          if(products.some((obj) =>{return obj.id===productId})){
            products.filter(function(obj){ if(obj.id===productId){ 
                obj.quantity+=n
                obj.totalPrice = Number(obj.totalPrice + obj.price*n)
            }})
          }else{
            products.push(product)
          }
          this.props.setLocalStorage(products)
          localStorage.setItem("products",JSON.stringify(products))
    }}

    render() {
        const order = this.props.order
        const products = this.props.logged? this.props.products: this.props.localstorage
        return (
            <div>
                <Container>
                    <h3 className="d-flex justify-content-center" style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem" }}>Carrito</h3>

                    <Row style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem" }}>
                        <Col sm={8}>
                            <TarjetaCompra productos={products} handleClick={this.handleClick} handleDelete={this.handleDelete} />
                        </Col>
                        <Col sm={4}>
                            <Carrito products={products} order={order} checkout={this.toCheckout} logged={this.props.logged} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoContainer)
















