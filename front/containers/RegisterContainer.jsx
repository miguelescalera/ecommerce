import React from "react"
import Register from "../components/Register"
import store from '../store'
const mapDispatchToProps= (dispatch, state)=>{
    return{newUser: data => dispatch(newUser(userData))}
}
const mapStateToProps= function(dispatch){
}
export default class Registercontainer extends React.Component {
    constructor(){
        super()
        this.state={
            FirstName:"",
            LastName:"",
            Email:"",
            Password:"",        
        }
        this.handlerChange=this.handlerChange.bind(this)
    }
handlerChange(e){
    this.setState({[e.target.name]:e.target.value})    
}
handlerSubmit(e){
    // e.preventDefault(),
    // this.props.newUser(this.state)
}
    render(){
        return(
            <div>
                <Register handlerChange={this.handlerChange}/>
            </div>
        )
    }
}