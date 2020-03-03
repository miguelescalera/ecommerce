const db = require("../../db")
const S  = require('sequelize');

class Order extends S.Model {}

Order.init({ 
    status: {
    type: S.STRING
    },
    total: {
        type: S.DECIMAL
    },
    adress: {
        type: S.TEXT

    }
}, {
  sequelize: db,
  modelName: 'Order' 
});

module.exports = Order