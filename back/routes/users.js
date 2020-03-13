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

router.post("/register",async function(req,res,next){
        User.findOne({where: {email: req.body.email}}) 
        .then(user=> {
            if(user) res.send("Email existente")
            else {
                User.create(req.body)
                .then(user=>res.send(user))
                .catch(next)
            }
        })
})
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err); // will generate a 500 error
      }
      // Generate a JSON response reflecting authentication status
      if (! user) {
        return res.send({ success : false, message : 'authentication failed' });
      }
      
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.send(req.user);
      });      
    })(req, res, next);
  });
  

router.post('/logout', function(req, res){
   
if (req.isAuthenticated()) {
      req.logout();
      req.session.destroy();
}
res.send("Logout")
});


router.get("/myorders", async function(req, res){
    // Get all orders
    const allOrders = await Order.findAll({
// Make sure to include the products
        include: [
            {
                model: User,
                as: "User",
                required: true,
                where: {
                    id: req.user.id
                }
            },
            {
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
        where: {
            status:{ [Op.not]: 'cart'}
        }
    })
res.send(allOrders) 
})

router.get("/me", function(req, res, next){
    if(req.user) res.send(req.user)
    else res.send("No hay nadie logueado")
})


module.exports = router