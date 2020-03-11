const express = require('express');
const router = express.Router();
const{ User, Order, Product, Order_Product }= require("../models")
const passport = require("passport")
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// router.get('/perfil'), function(req,res){
//     if (req.isAuthenticated()) {
//         res.send(req.user)
//     }
//     else{res.send("nadie autenticado")}
// }

router.post("/register",function(req,res,next){
        User.create(req.body)
        .then(user=>res.send(user))
        .catch(next)
})

router.post("/login",passport.authenticate('local'),function(req,res){
    res.send(req.user)
})
  

router.post('/logout', function(req, res){
   
if (req.isAuthenticated()) {
    // console.log("Logouteo")
      req.logout();
      req.session.destroy();
}
res.send("Logout")
});



router.get("/myorders", async function(req, res){
    // Get all orders
    const allOrders = await Order.findAll({
// Make sure to include the products
        include: [{
            model: Product,
            as: 'products',
            required: false,
 // Pass in the Product attributes that you want to retrieve
            attributes: ['id', 'name'],
        through: {
   // This block of code allows you to retrieve the properties of the join table
            model: Order_Product,
            as: 'order_products',
            attributes: ['quantity', "totalPrice"],
            }
        }],
        where: {status:{ [Op.not]: 'cart'}}
    })
res.send(allOrders) 
})



module.exports = router