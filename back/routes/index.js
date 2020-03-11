const productRouter = require("./products");
const usersRouter = require("./users");
const cartRouter = require("./cart");
const privateRouter= require("./private")
const express = require("express");
const router = express.Router();

router.use("/products", productRouter);
router.use("/users", usersRouter);
router.use("/cart", cartRouter);
router.use("/private",privateRouter)

module.exports = router;
