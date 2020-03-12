import React from "react";
import UserPrivate from "../components/UserPrivate";
import  {fetchOrders, setUpdatedOrder, changeOrderStatus} from '../actions/orders'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'
import OrdenesPrivate from "../components/OrdenesPrivate"
import {Alert} from "react-bootstrap"


const mapDispatchToProps = (dispatch, state) => {
    return { 
      fetchOrders: () => dispatch(fetchOrders()),
      setUpdatedOrder: (order) => dispatch(setUpdatedOrder(order)),
      changeOrderStatus: (order,status) => dispatch(changeOrderStatus(order,status))
     };
  };

  const mapStateToProps = (state, ownprops) => {
    return {
      updatedOrder: state.orders.updatedOrder ,
      user: state.user.loginUser,
      ordenes: state.orders.orders,
    }
  };


class SuperadminOrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

componentDidMount(){
    this.props.fetchOrders()
}

handleChange(e){
  this.setState({status: e.target.value})
}

handleClick(orden){
  this.props.changeOrderStatus(orden, this.state)
  this.props.setUpdatedOrder(orden)
}

  render() {
    const {user, ordenes, updatedOrder} = this.props

    console.log(this.props);
    
    const userPriContStyles = {
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
      
    }
    console.log("ORDENEEES", ordenes)
    return (
      <Container style={userPriContStyles}>
        <UserPrivate  user={user} /> 
        {ordenes? ordenes.map(orden => {
                        return (
                            <OrdenesPrivate order={orden} handleChange={this.handleChange} handleClick={this.handleClick}/>
                        )
                    }): <Alert variant="info">No hay ordenes</Alert>}
      </Container>
    );
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(SuperadminOrdersContainer) 