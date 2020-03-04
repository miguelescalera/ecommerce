import React from "react"
import Navbars from "../components/Navbar"
import fetchSearchProducts from "../actions/searchProductsActions"
import { connect } from "react-redux"

class NavbarContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            imput:""
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleChange= this.handleChange.bind(this)
        console.log(this.props);
    }
    handleChange(event){
        this.setState({ input:event.target.value})
                       
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.getProducts(this.state.input) 
        this.props.redirect.history.push('/products')// esta linea de cod. redirecciona al usuario cuando haga submit al formulario
        
    }
    
    
    render(){
        return(

            <div>
                <h1>aca debria estar el navbar</h1>
                <Navbars handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
}

}


const mapStateToProps = function (state) {
    return {
        foundProducts: state.foundProducts
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        getProducts: (product) => dispatch(fetchSearchProducts(product))
    }
}
        
    

export default connect(mapStateToProps,mapDispatchToProps)(NavbarContainer);


