import React from "react";
import UserPrivate from "../components/UserPrivate";
import OrdenesContainerPrivate from "./OrdenesContainerPrivate";
import  {fetchOrders} from '../actions/orders'
import {connect} from 'react-redux'



const mapDispatchToProps = (dispatch, state) => {
    return { 
      fetchOrders: () => dispatch(fetchOrders())
     };
  };

  const mapStateToProps = (state, ownprops) => {
    return state
  };



class UserPrivateContainer extends React.Component {
  constructor(props) {
    super(props);
  }

componentDidMount(){
    this.props.fetchOrders()
}


  render() {
      console.log("aaaaaa",this.props)
    return (
      <div>
        <UserPrivate />
        <OrdenesContainerPrivate />
      </div>
    );
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(UserPrivateContainer) 