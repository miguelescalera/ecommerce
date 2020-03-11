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

        this.handleToggle= this.handleToggle.bind(this)
    }
       
    componentDidMount(){
        this.props.getAllUsers()
    }
    
    handleToggle(statusUser,idUser){
        console.log("statusUser: ",statusUser,"idUser :",idUser)
        toggleStatus(statusUser,idUser)
         this.props.getAllUsers()
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
        
            
           
        


        
        
        