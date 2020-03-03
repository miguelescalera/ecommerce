const db = require("../../db")
const S  = require('sequelize');

class Category extends S.Model {}

Category.init({ 
    name: {
    type: S.STRING
    }
}, {
  sequelize: db,
  modelName: 'Category' 
});

module.exports = Category