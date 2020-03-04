const express = require("express");
const router = express.Router();
const { Product } = require("../models");

router.get("/", function(req, res, next) {
  Product.findAll(req.body)
    .then(function(products) {
      res.json(products);
    })
    .catch(next);
});

router.post("/", function(req, res, next) {
  Product.create(req.body)
    .then(function(products) {
      res.json(products);
    })
    .catch(next);
});

router.get("/search", function(req, res) {
  const name_query = req.query.name.split("20%").join(" ");
  Product.findAll({
    where: {
      name: name_query
    }
  }).then(function(products) {
    res.send(products);
  });
});

router.get("/:id", function(req, res) {
  Product.findByPk(req.params.id)
    .then(function(products) {
      res.send(products);
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
