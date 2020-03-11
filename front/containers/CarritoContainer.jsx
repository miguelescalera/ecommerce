import React from 'react'
import Carrito from '../components/Carrito'
import TarjetaCompra from "../components/TarjetaCompra"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from "react-redux"
import { getCart, modifyCartProduct, deleteCartProduct } from "../actions/cart"

let Finalproducts = new Array;
const mapStateToProps = function (state) {
    return {
        allProducts: state.product.list,
        products: state.cart.products,
        order: state.cart.order,
        loginUser: state.user.loginUser,
        modifiedProduct: state.cart.modifiedProduct
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        getCart: () => dispatch(getCart()),
        modifyCartProduct: (productId, quantity) => dispatch(modifyCartProduct(productId, quantity)),
        deleteCartProduct: (productId) => dispatch(deleteCartProduct(productId))
    };
};


class CarritoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.getCart()
    }





    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.modifiedProduct)
        console.log(this.props.modifiedProduct)
        if (prevProps.modifiedProduct.quantity !== this.props.modifiedProduct.quantity || prevProps.modifiedProduct.id !== this.props.modifiedProduct.id) {
            this.props.getCart()
        }
        if (prevProps.modifiedProduct.id !== this.props.modifiedProduct.id) {
            this.props.getCart()
        }
    }

    handleClick(productId, n) {
        this.props.modifyCartProduct(productId, n)
    }

    handleDelete(productId) {
        this.props.deleteCartProduct(productId)
    }

    render() {
        const { products, order } = this.props
        console.log(order)
        console.log(products)
        return (
            <div>
                <Container>
                    <h3 className="d-flex justify-content-center" style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem" }}>Carrito</h3>

                    <Row style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem" }}>
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
















