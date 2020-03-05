import React from "react"
import Register from "../components/Register"
import {newUser} from "../actions/users"
import { connect } from 'react-redux'


const mapDispatchToProps= (dispatch, state)=>{
    return{newUser: data => dispatch(newUser(data))}
}
const mapStateToProps= function(dispatch){
    return{}
}

class RegisterContainer extends React.Component {
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            password:""       
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
handleChange(e){
    let value = e.target.value
    let key = e.target.name
    this.setState({[key]: value})
    
}

handleSubmit(e){
    e.preventDefault();
    this.props.newUser(this.state)
  
    localStorage.setItem('email', this.state.email)
    localStorage.setItem('password', this.state.password)
    this.props.history.push("/users/login")
   
}
    render(){
        return(
            <div>
                <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)
