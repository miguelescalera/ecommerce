import React from 'react'
import Login from '../components/Login'
import {loginUser} from '../actions/LoginActions'
import {connect} from 'react-redux'

const mapDispatchToProps= (dispatch, state)=>{
    return{loginUser: user => dispatch(loginUser(user))}
}
const mapStateToProps= ( state,ownprops)=>{
    return{
        userLogin:state.user.loginUser

    }
}

class LoginContainer extends React.Component {
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
        this.handlerChange=this.handlerChange.bind(this)
        this.handlerSubmit=this.handlerSubmit.bind(this)
    }

handlerChange(e){
    const key = e.target.name
    const value = e.target.value
    this.setState({
        [key]:value
    })  
}

handlerSubmit(e){
    e.preventDefault()
    localStorage.setItem('email', this.state.email)
    localStorage.setItem('password', this.state.password)
    console.log("PROPS!",this.props)
    this.props.loginUser(this.state)
    if(this.props.userLogin.email){
        this.props.history.push("/products")
    }
    else{
        alert("usuario o contraseña incorrecta")
    }

}

    
    render(){
        return(
            <div>
                <Login 
                handlerChange={this.handlerChange}
                handlerSubmit={this.handlerSubmit} 
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)