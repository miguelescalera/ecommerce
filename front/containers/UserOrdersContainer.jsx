import React from 'react'
// import User from '../components/User'
import UserOrders from '../components/UserOrders'
import {getUserOrders} from "../actions/orders"
import {connect} from "react-redux"

class UserOrdersContainer extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getUserOrders()
    }

    render() {
        return (
            <div>
                <UserOrders orders={this.props.orders} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {orders: state.user.orders}
};

const mapDispatchToProps = dispatch => {  
  return {
    getUserOrders: ()=> dispatch(getUserOrders())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrdersContainer);


  
  
  