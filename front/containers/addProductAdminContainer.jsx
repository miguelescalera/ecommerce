import React from "react";
import AddProductAdmin from "../components/addProductAdmin";
import { connect } from "react-redux";
import { newProduct } from "../actions/addProductActions";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = (dispatch, state) => {
  return {
    newProduct: data => dispatch(newProduct(data))
  };
};
class AddProductAdminContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      imgUrl: "",
      rating: 0,
      brand: {
        name: "",
        origin: ""
      },
      categories: [
        {
          name: ""
        }
      ],
      images: [
        {
          url: ""
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
  }

  handleChange(evt) {
    if (evt.target.name === "price") {
      newValue = parseInt(evt.target.value);
      key = evt.target.name;
    }
    let value = evt.target.value;
    let key = evt.target.name;
    let [keys] = key.split(".");
    let newValue;
    if (key === "brand.name") {
      const previousValue = this.state.brand;
      newValue = { ...previousValue, name: value };
    } else if (key === "brand.origin") {
      const previousValue = this.state.brand;
      newValue = { ...previousValue, origin: value };
    } else if (key === "categories.name") {
      newValue = [{ name: value }];
    } else if (key === "images.url") {
      newValue = [{ url: value }];
    } else {
      newValue = value;
    }
    this.setState({ [keys]: newValue });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let price = parseInt(this.state.price);
    let stock = parseInt(this.state.stock);
    let rating = parseInt(this.state.rating);

    this.setState({ price: price }, { stock: stock }, { rating: rating });
    newProduct(this.state);
  }

  render() {
    return (
      <AddProductAdmin
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        input={this.state}
      />
    );
  }
}

export default withRouter(
  connect(null, mapDispatchToProps)(AddProductAdminContainer)
);
