import React from "react";
import { connect } from "react-redux";
import {getAllUsers,toggleStatus} from "../actions/AllUsersActions"
import AllUsersComponent from "../components/AllUsers"


const mapStateToProps = function(state){
    return{
        allUsers: state.allUsers.allUsers
    }

       

}
const mapDispatchToProps = function(dispatch){
   return{
       getAllUsers: () => dispatch(getAllUsers()),
    }
} 
      

class SuperAdminContainer extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getAllUsers()

    }
    handleToggle(statusUser,idUser){
        toggleStatus(statusUser,idUser)
        }

    render(){
        
        return(
            <div>
                 <AllUsersComponent allUsers={this.props.allUsers} handleToggle={this.handleToggle} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminContainer);