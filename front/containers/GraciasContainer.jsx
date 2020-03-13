import React from "react"
import { connect } from "react-redux"
import Gracias from '../components/Gracias'
import Carrito from '../components/Carrito'
import { withRouter } from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        nameOfUser:state.user.loginUser.firstName,
        lastNameOfUser:state.user.loginUser.lastName,
        todasOrder:state.user.orders,


    }
}






class GraciasContainer extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)



    }

    handleSubmit(event) {

        this.props.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario
    }
    



    render() {
        const order = this.props.todasOrder.pop()
        console.log(order)



        return (
        <div>

           <Gracias 
           nombre={this.props.nameOfUser} 
           apellido={this.props.lastNameOfUser}  
           order={order} 
           handleSubmit={this.handleSubmit}

           />
        </div>
           )
    }
}
export default withRouter(
     connect(mapStateToProps)(GraciasContainer)
     )