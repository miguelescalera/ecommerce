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
  if(!req.user) return res.send([])
  const order = await Order.findOne({
    where: { userId: req.user.id, status: "cart" }
  });
  if(!order) return res.send([])
  const orderProducts = await Order_Product.findAll({
    where: {
      OrderId: order.id
    }
  });

  let products = await Promise.all(orderProducts.map(orderProduct => Product.findByPk(orderProduct.ProductId)))

  products = products.map(product => {
    return{
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      stock: product.stock,
      rating: product.rating,
      imgUrl: product.imgUrl,
      quantity : orderProducts[products.indexOf(product)].quantity,
      totalPrice : orderProducts[products.indexOf(product)].totalPrice
    
  }})
  products = products.sort((a, b) => (a.name > b.name) ? 1 : -1)
  res.send({
    list: products,
    order: order
  })
  
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

  order.subTotal = Number(order.subTotal) + Number(product.price * n)
  await order.save()

  res.send(orderProduct);
});

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

router.post("/products/:id/deletefromcart", async function(req, res, next) {
  const order = await Order.findOne({
    where: {
      userId: req.user.id,
      status: "cart"
    }
  })
  const orderProduct = await Order_Product.findOne({
        where: {
          OrderId: order.id,
          ProductId: req.params.id
        }
      })
  order.subTotal = Number(order.subTotal) - Number(orderProduct.totalPrice)
  await order.save()
  await orderProduct.destroy()

  res.send(orderProduct)
});

router.put("/checkout", async function(req, res, next) {
  const order = await Order.findOne({
    where:{
      userId: req.user.id,
      status: "cart"
    } })
  order.update(req.body)
  await order.save()
  res.send(order)
})

router.delete("/delete", async function(req, res, next) {
  const order = await Order.findOne({
    where:{
      userId: req.user.id,
      status: "cart"
    } })
  const products = await order.getProducts();
  
  order.removeProducts(products);
  
  const deletedOrder = await Order.destroy({
    where: {
      userId: req.user.id,
      status: "cart"
    },
  });
  res.send(deletedOrder.id)
})

module.exports = router;
