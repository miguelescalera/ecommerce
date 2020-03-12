import React from "react";
import { connect } from "react-redux";
import {getAllUsers,toggleStatus,deleteUser} from "../actions/AllUsersActions"
import AllUsersComponent from "../components/AllUsers"



const mapStateToProps = function(state){
    return{
        allUsers: state.allUsers.allUsers
    }

       

}
const mapDispatchToProps = function(dispatch){
   return{
       getAllUsers: () => dispatch(getAllUsers())
    }
} 
       


      

class SuperAdminContainer extends React.Component{
    constructor(){
        super();

        this.handleToggle= this.handleToggle.bind(this)
        this.handleDelete= this.handleDelete.bind(this)
    }
       
    componentDidMount(){
        this.props.getAllUsers()
    }
    
    handleToggle(statusUser,idUser){
        toggleStatus(statusUser,idUser)
         this.props.getAllUsers()
    }
        

    handleDelete(userId){
        console.log("usuario borrado!")
        this.props.getAllUsers()
        
    }
       
    
    render(){
        return(
            <div>
                 <AllUsersComponent allUsers={this.props.allUsers} handleToggle={this.handleToggle} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
        

export default connect(mapStateToProps, mapDispatchToProps)(SuperAdminContainer);
        
            
           
        


        
        
        