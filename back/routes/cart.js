const express = require("express");
const router = express.Router();
const {
  db,
  Category,
  Order,
  Product,
  Review,
  User,
  Order_Product
} = require("../models");

const Promise = require("bluebird");

router.get("/", async function(req, res, next) {
  const order = await Order.findOne({
    where: { userId: req.user.id, status: "cart" }
  });
  console.log(order);
  const cart = await Order_Product.findAll({
    where: {
      OrderId: order.id
    }
  });
  res.send(cart);
});

router.post("/products/:id/modifycart", async function(req, res, next) {
  const n = req.body.n;
  const product = await Product.findByPk(req.params.id);
  const [order] = await Order.findOrCreate({
    where: {
      userId: req.user.id,
      status: "cart"
    }
  });
  const [orderProduct] = await Order_Product.findOrCreate({
    where: { OrderId: order.id, ProductId: product.id }
  });
  orderProduct.quantity = orderProduct.quantity + n;
  orderProduct.totalPrice = product.price * orderProduct.quantity;

  await orderProduct.save();
  res.send(orderProduct);
});

/*
  Promise.props({ product, order })
    .then(obj => {
      Order_Product.findOrCreate({
        where: {
          productId: obj.product.id,
          orderId: obj.order.id
        }
      });
    })
    .then(result => {
      console.log(result);
      res.send(result);
    });*/
/*
    .then(orderId => {
      Order_Product.create(
        //  where: {
        { orderId: 1, productId: 1 },
        { returning: true }
        //  }
      );
    })
    .then(orderProduct => {
      console.log(orderProduct);
      orderProduct[0].increase(1);
      return orderProduct;
    })
    .then(orderProduct => res.send(orderProduct));
    */

router.post("/products/:id/removefromcart", function(req, res, next) {
  Order.findOrCreate({
    where: {
      userId: req.user.id,
      status: "cart"
    }
  })
    .then(result => result[0].id)
    .then(orderId => {
      Order_Product.findOrCreate({
        where: {
          orderId,
          productId: req.params.id
        }
      });
    })
    .then(orderProduct => orderProduct.decrease(1));
});

router.post("/products/:id/deleteproductfromcart", function(req, res, next) {
  Order.findOne({
    where: {
      userId: req.user.id,
      status: "cart"
    }
  })
    .then(result => result.id)
    .then(orderId => {
      Order_Product.findOne({
        where: {
          orderId,
          productId: req.params.id
        }
      });
    })
    .then(orderProduct => orderProduct.destroy());
});

module.exports = router;
