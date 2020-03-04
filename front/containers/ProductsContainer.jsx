import React from "react"
import { connect } from "react-redux"
import TarjetaProducto from "../components/TarjetaProducto"

class ProductConatainer extends React.Component{
constructor(){
    super()
}
        render(){
            <div>
                <h3>resultado de la busqueda</h3>
                <Products products={this.props.foundProducts}/>
            </div>
        }
}

const mapStateToProps = function (state) {
    return {
        foundProducts: state.foundProducts,
        
    };
}
export default connect(mapStateToProps)(ProductConatainer);
