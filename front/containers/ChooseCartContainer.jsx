import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import ChooseCart from "../components/ChooseCart"
import {replaceCart, mergeCart} from "../actions/merge"
import {getCart} from "../actions/cart"
import {withRouter} from "react-router-dom"

class ChooseCartContainer extends React.Component{
    constructor(props){
        super(props)
        this.handleMerge = this.handleMerge.bind(this)
        this.handleDiscard = this.handleDiscard.bind(this)
        this.handleReplace = this.handleReplace.bind(this)
    }

    componentDidMount() {
    
    }

    handleMerge(){
        console.log("hola")
        this.props.mergeCart(this.props.localstorage)
        this.history.push("/products")
    }
    handleDiscard(e){
        e.preventDefault()
        localStorage.setItem("products",JSON.stringify([]))
        this.props.history.push("/products")
    }

    handleReplace(e){
        e.preventDefault()
        this.props.replaceCart(this.props.localstorage)
        this.props.history.push("/products")
    }

    render(){
        return <ChooseCart handleMerge={this.handleMerge} handleDiscard={this.handleDiscard} handleReplace={this.handleReplace}/>
    }

}

const mapStateToProps = (state)=>{
    return {
        cart: state.cart.products,
        localstorage: state.localstorage.data
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        replaceCart: (local)=>dispatch(replaceCart(local)),
        mergeCart: (local)=>dispatch(mergeCart(local)),
        getCart: ()=>dispatch(getCart())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChooseCartContainer));