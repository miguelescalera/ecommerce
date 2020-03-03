const productRouter = require("./products")
const usersRouter = require("./users")
const express = require('express');
const router = express.Router();

router.use("/products", productRouter)
router.use("/users", usersRouter)

module.exports = router