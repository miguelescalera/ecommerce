import React from "react"

export default ({productToUpdate,handleSubmit}) =>{
  console.log("PRODUCT: ",productToUpdate)
    const styleMain={
        backgroundColor:"#C0C0C0",
        marginTop: "7%",
        width: "40%",
        marginLeft: "25%"
       }
      return (
        <div style={styleMain} className="jumbotron">
          <h3 className="display-4">Add Product</h3>
          <hr className="my-4" />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-group">
                <label for="name">Name product</label>
                <input
                  defaultValue={productToUpdate.name}
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name product"
                 // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="price">Price</label>
                <input
                  defaultValue={productToUpdate.price}
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Enter Price Product"
                 // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="stock">Stock</label>
                <input
                  defaultValue={productToUpdate.stock}
                  type="number"
                  className="form-control"
                  name="stock"
                  placeholder="Enter Stock"
                 // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="description">Description</label>
                <input
                  defaultValue={productToUpdate.description}
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter description"
                 // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="imgUrl">Image</label>
                <input
                  defaultValue={productToUpdate.imgUrl}
                  type="text"
                  className="form-control"
                  name="imgUrl"
                  placeholder="Enter URL"
                 // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="rating">Rating</label>
                <input
                  defaultValue={productToUpdate.rating}
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="Enter rating"
                 // onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-group">
                <label for="brand: {name}">Brand name</label>
                <input
                  defaultValue={productToUpdate.Brand.name}
                  type="text"
                  className="form-control"
                  name="brand.name"
                  placeholder="Enter brand name"
                 // onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label for="brand.origin">Origin</label>
                <input
                  defaultValue={productToUpdate.Brand.origin}
                  type="text"
                  className="form-control"
                  name="brand.origin"
                  placeholder="Enter origin"
                 // onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-group">
                <label for="categories">Category name</label>
                <input
                 defaultValue={productToUpdate.Categories[0].name}
                  type="text"
                  className="form-control"
                  name="categories.name"
                  placeholder="Enter category name"
                 // onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-group">
                <label for="images">Image URL</label>
                <input
                 defaultValue={productToUpdate.images}
                  type="text"
                  className="form-control"
                  name="images.url"
                  placeholder="Enter images name"
                 // onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
}