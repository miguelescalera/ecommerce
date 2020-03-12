import React from "react"
import AddReview from "../components/AddReview"
import {connect} from "react-redux"
import {sendReview} from "../actions/review"


const mapStateToProps= (state)=>{
    return{}
}

const mapDispatchToProps= (dispatch)=>{
    return{
        sendReview: (productId, review) => dispatch(sendReview(productId, review))
    }
}

class Addreview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        let value = e.target.name=== "rating"? parseInt(e.target.value) : e.target.value
        this.setState({[e.target.name]:value})
    }
    
    handleSubmit(e){
        e.preventDefault()
        const productId = this.props.match.params.id
        console.log(this.state)
        if(typeof this.state.rating === "number") {
            this.props.sendReview(productId, this.state)
            this.props.history.push("/users/myorders")
        }
    }

    render(){
        return <AddReview handleChange={this.handleChange} handleSubmit={this.handleSubmit} />    

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Addreview)
