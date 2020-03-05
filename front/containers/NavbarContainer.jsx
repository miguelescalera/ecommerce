import React from "react"
import Navbars from "../components/Navbar"
import fetchSearchProducts from "../actions/searchProductsActions"
import { connect } from "react-redux"
import {setInput} from "../actions/search"
import {withRouter} from "react-router-dom"
import {addLogin} from "../actions/LoginActions"

class NavbarContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:""
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({ input:event.target.value})
                       
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.setInput(this.state.input) 
        this.props.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario    
    }
    
    
    render(){
        
        return(

            <div>
                <Navbars handleSubmit={this.handleSubmit} handleChange={this.handleChange} emailUser={this.props.email} dispatchLogout={this.props.dispatchLogout} />
            </div>
        )
}

}


const mapStateToProps = function (state) {
    return {
        foundProducts: state.foundProducts,
        email: state.user.loginUser.email
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        setInput: (input) => dispatch(setInput(input)),
        dispatchLogout:() => dispatch(addLogin(""))
    }
}
        

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarContainer));


