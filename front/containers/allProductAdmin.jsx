import React from "react";
import { connect } from "react-redux";
import {deleteProduct} from "../actions/AllProductsAction"
import AllProductsComponent from "../components/AllProductsComponent"
import {getAllProducts,productToUpdate} from "../actions/searchProductsActions"


const mapDispatchToProps = function (dispatch){
    return {
        getAllProducts:() => dispatch(getAllProducts()),
        ProductToUpdate:(idProduct) => dispatch(productToUpdate(idProduct))
    }
}


const mapStateToProps = function(state){
    return{
        allProducts: state.product.list
    }
}

class AllProductsAdmin extends React.Component{
    constructor(){
        super();

        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdate= this.handleUpdate.bind(this)
        
    }
        
    handleUpdate(productId){
       let ToUpdate = this.props.allProducts.filter(function(elem){
                                return elem.id===productId
                                })
                           
        this.props.ProductToUpdate(ToUpdate)
    }

    
     handleDelete(productId){
        deleteProduct(productId)
       this.props.getAllProducts()
        
    }
    
   
        
        render(){
            return(
                <div>
                     <AllProductsComponent allProducts={this.props.allProducts} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
                </div>
            )
        }
    }
        
        
            
        
         
     
        
       
    
        

export default connect(mapStateToProps,mapDispatchToProps)(AllProductsAdmin);
        
            
           
        

