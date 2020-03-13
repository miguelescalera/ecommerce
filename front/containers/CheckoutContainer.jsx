import React from "react"
import Checkout from "../components/Checkout"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { connect } from "react-redux"
import { faAddressBook } from "@fortawesome/free-regular-svg-icons"
import { checkoutCart } from "../actions/cart"
import { getUserOrders } from "../actions/userOrders"

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkoutCart: (data) => dispatch(checkoutCart(data)),
        getUserOrders: () => dispatch(getUserOrders())
    }
}

const checkoutContStyles = {
    width:'800px'
}

class CheckoutContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "comprado"
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault()
        this.props.checkoutCart(this.state)
            .then(orders => this.props.getUserOrders())
        this.props.history.push("/cart/checkout/gracias")
    }




    render() {
        return (
            <Container style={checkoutContStyles}>
                <h3 className="d-flex justify-content-center" style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem" }}>Checkout</h3>

                <div style={{ marginBlockEnd: "1.5rem", marginBlockStart: "1.5rem", width:'800px' }}>

                    <Checkout handleClick={this.handleClick} handleChange={this.handleChange} />
                </div>

            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer)
