import React from "react";
import { connect } from "react-redux";
import UpdateProductComponent from "../components/UpdateProductComponent"
import {updateThisProduct} from "../actions/addProductActions"

const mapStateToProps= state => {
    return {
        productToUpdate: state.product.productToUpdate
    }
}


class updateProductContainer extends React.Component{
        constructor(props){
            super(props)
        }
        handleSubmit(event,product){
            event.preventDefault();
            updateThisProduct(product)
        }
        render(){
            console.log("product to update: ",this.props.productToUpdate[0])
            return (
                    <div>
                        <UpdateProductComponent productToUpdate={this.props.productToUpdate[0]} handleSubmit={this.handleSubmit} />
                    </div>
            )
        }
}

export default (
    connect(mapStateToProps)(updateProductContainer)
  );