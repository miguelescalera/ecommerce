const productRouter = require("./products");
const usersRouter = require("./users");
const cartRouter = require("./cart");
const privateRouter= require("./private")
const express = require("express");
const router = express.Router();

const checkAdmin= function(req,res,next){
    console.log("user:",req.user.status)
    if(!req.user) return res.send("Please login")
    if(req.user.status <2 ) return res.status(401).send("No sos admin vieja")
   
    next()
}

router.use("/products", productRouter);
router.use("/users", usersRouter);
router.use("/cart", cartRouter);
router.use("/private", checkAdmin ,privateRouter)

module.exports = router;
