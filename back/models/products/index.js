const db = require("../db")
const S  = require('sequelize');

class Product extends S.Model {}

Product.init({ 
    name: {
    type: S.STRING,
    validate: {
        notEmpty: true
      }
    },
    price: {
        type: S.NUMBER,
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
        type: S.NUMBER
    }
}, {
  
  sequelize: db,
  modelName: 'Product' 
});