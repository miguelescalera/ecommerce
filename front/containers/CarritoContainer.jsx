import React from 'react'
import Carrito from '../components/Carrito'
import TarjetaCompra from "../components/TarjetaCompra"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from "react-redux"
import {getCart, setCartProducts} from "../actions/cart"


const mapStateToProps = function(state) {
    return {
      products: state.cart.products,
      loading: state.cart.loading,
      loginUser: state.user.loginUser
    };
  };
  
  const mapDispatchToProps = function(dispatch) {
    return {
      getCart: () => dispatch(getCart()),
      setCartProducts: (productId, quantity) => dispatch(setCartProducts(productId, quantity))
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
    console.log(this.props.products)
    this.props.getCart()
}

componentDidUpdate(prevProps, prevState){
    // console.log(prevState.orderProduct.id)
    // console.log(this.state.orderProduct.id)
    // if(prevState.orderProduct.id !== this.state.orderProduct.id || prevState.orderProduct.quantity !== this.state.orderProduct.id){
    //     this.props.getCart()
    // }
    // NO LO PUEDO HACER EN EL ESTADO PORQ SE ME REINICIA; TENGO QUE PONER EN EL STORE EL ULTIMO CLIQUEADO
}

handleClick(productId, n){
    this.props.setCartProducts(productId, n)
    .then(orderProduct => {
        console.log(orderProduct)
        this.setState({orderProduct: orderProduct.data})
    })
    // this.props.getCart()
}

render(){
    const {products} = this.props
    return(
        <div>
            <Container> 
                <Row>
                    <Col sm={8}>
                    <TarjetaCompra productos={products} handleClick={this.handleClick}/>
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
  



