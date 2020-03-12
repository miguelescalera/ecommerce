const Category = require("./categories");
const Order = require("./orders");
const Product = require("./products");
const Review = require("./reviews");
const User = require("./users");
const db = require("../db");
const Order_Product = require("./orderproducts");
const Image = require("./images")
const Brand = require("./brands")
const Promise = require("bluebird");

//MANY TO MANY RELATION BETWEEN PRODUCT AND CATEGORY

Category.belongsToMany(Product, {
  through: "Product_Category"
});

Product.belongsToMany(Category, {
  through: "Product_Category"
});

//ONE TO MANY RELATION BETWEEN PRODUCT AND IMAGES

Image.belongsTo(Product);
Product.hasMany(Image);


//ONE TO MANY RELATION BETWEEN PRODUCT AND BRAND
Product.belongsTo(Brand)
Brand.hasMany(Product)

//ONE TO MANY RELATION BETWEEN USERS AND REVIEW

Review.belongsTo(User);
User.hasMany(Review);

//ONE TO MANY RELATION BETWEEN PRODUCTS AND REVIEW

Review.belongsTo(Product);
Product.hasMany(Review);

//ONE TO MANY RELATION BETWEEN USERS AND ORDER

Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order);

//MANY TO MANY RELATION BETWEEN PRODUCT AND ORDER
/*
Product.belongsToMany(Order, {
  through: { model: Order_Product },
  as: "orders"
});*/

Order.belongsToMany(Product, {
  through: { model: Order_Product },
  as: "products"
});

Order_Product.increase = async (orderId, productId, n) => {
  const orderProduct = await Order_Product.findOne({
    where: { OrderId: orderId, ProductId: productId }
  });
  const product = await Product.findOne({ where: { id: productId } });

  orderProduct.quantity += await n;
  orderProduct.totalPrice = (await product.price) * orderProduct.quantity;

  return orderProduct;
};

Order_Product.prototype.decrease = (productId, n) => {
  this.quantity -= n;
  Product.findOne({ where: { id: productId } })
    .then(product => product.price)
    .then(price => (this.totalPrice = this.quantity * price));
};

Order_Product.belongsTo(Order, { as: "order" });
Order_Product.belongsTo(Product, { as: "product" });

module.exports = {
  db,
  Category,
  Order,
  Product,
  Review,
  User,
  Order_Product,
  Brand,
  Image
};
