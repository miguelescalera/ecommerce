const db = require("../../db")
const S  = require('sequelize');

class Brand extends S.Model {}

Brand.init({ 
    name: {
    type: S.STRING
    },
    origin: {
    type: S.STRING
    }
}, {
  sequelize: db,
  modelName: 'Brand' 
});

module.exports = Brand