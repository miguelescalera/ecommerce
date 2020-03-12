const express = require("express");
const router = express.Router();
const { User, Order, Product, Order_Product } = require("../models");
const passport = require("passport");
const Sequelize = require("sequelize");
const nodemailer = require("nodemailer");

const Op = Sequelize.Op;

// router.get('/perfil'), function(req,res){
//     if (req.isAuthenticated()) {
//         res.send(req.user)
//     }
//     else{res.send("nadie autenticado")}
// }

router.post("/register", function(req, res, next) {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(next);
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "winenotp5@gmail.com",
      pass: "plataforma5"
    }
  });
  const mailOptions = {
    from: "winenotp5@gmail.com",
    to: req.body.email,
    subject: "Estado de compra Winenot",
    text: `Hola ${req.body.firstName} Bienvenido! ya estas registrado en nuestra web
     Muchas gracias WineNot `
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Enviado a ${req.body.email}`);
    }
  });
});

router.post("/login", passport.authenticate("local"), function(req, res) {
  res.send(req.user);
});

router.post("/logout", function(req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    req.session.destroy();
  }
  res.send("Logout");
});

router.get("/myorders", async function(req, res) {
  // Get all orders
  const allOrders = await Order.findAll({
    // Make sure to include the products
    include: [
      {
        model: Product,
        as: "products",
        required: false,
        // Pass in the Product attributes that you want to retrieve
        attributes: ["id", "name"],
        through: {
          // This block of code allows you to retrieve the properties of the join table
          model: Order_Product,
          as: "order_products",
          attributes: ["quantity", "totalPrice"]
        }
      }
    ],
    where: { status: { [Op.not]: "cart" } }
  });
  res.send(allOrders);
});

router.get("/me", function(req, res, next) {
  if (req.user) res.send(req.user);
  else res.send("No hay nadie logueado");
});

module.exports = router;
