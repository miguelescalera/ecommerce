const db = require("../../db");
const S = require("sequelize");

class Order extends S.Model {}

Order.init(
  {
    status: {
      type: S.STRING
    },
    subTotal: {
      type: S.DECIMAL
    },
    adress: {
      type: S.TEXT
    },
    userId: {
      type: S.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    }
  },
  {
    sequelize: db,
    modelName: "Order"
  }
);

module.exports = Order;
