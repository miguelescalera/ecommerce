const db = require("../../db");
const S = require("sequelize");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: S.DECIMAL,
      allowNull: false
    },
    description: {
      type: S.TEXT
    },
    imgUrl: {
      type: S.STRING
    },
    stock: {
      type: S.INTEGER,
      default: 0
    },
    rating: {
      type: S.DECIMAL
    },
    type: {
      type: S.STRING,
      allowNull: false
    },
    brand: {
      type: S.STRING,
      allowNull: false
    },
    origin: {
      type: S.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "Product"
  }
);

module.exports = Product;
