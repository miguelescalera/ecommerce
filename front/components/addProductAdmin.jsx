//import { Brand } from "react-bootstrap/lib/Navbar";

const React = require("react");

export default ({ handleChange, handleSubmit }) => {
  return (
    <div class="jumbotron">
      <h3 class="display-4">Add Product</h3>
      <hr class="my-4" />
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <div class="form-group">
            <label for="name">Name product</label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Name product"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input
              type="number"
              class="form-control"
              name="price"
              placeholder="Enter Price Product"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input
              type="number"
              class="form-control"
              name="stock"
              placeholder="Enter Stock"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              placeholder="Enter description"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="imgUrl">Image</label>
            <input
              type="text"
              class="form-control"
              name="imgUrl"
              placeholder="Enter URL"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="rating">Rating</label>
            <input
              type="number"
              class="form-control"
              name="rating"
              placeholder="Enter rating"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="form-group">
            <label for="brand: {name}">Brand name</label>
            <input
              type="text"
              class="form-control"
              name="brand.name"
              placeholder="Enter brand name"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="brand.origin">Origin</label>
            <input
              type="text"
              class="form-control"
              name="brand.origin"
              placeholder="Enter origin"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="form-group">
            <label for="categories">Category name</label>
            <input
              type="text"
              class="form-control"
              name="categories.name"
              placeholder="Enter category name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="form-group">
            <label for="images">Image URL</label>
            <input
              type="text"
              class="form-control"
              name="images.url"
              placeholder="Enter images name"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
