const productRouter = require("./products")
const usersRouter = require("./users")
const express = require('express');
const router = express.Router();

router.use("/product", productRouter)
router.use("/user", usersRouter)

module.exports = router