import React from "react";
import Product from "../components/Product";
import { fetchProduct } from "../actions/selectedProductAction";
import { connect } from "react-redux";

class ProductContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSelectProduct(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Product selectedProduct={this.props.selectedProduct} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.product.selectedProduct
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSelectProduct: id => dispatch(fetchProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
