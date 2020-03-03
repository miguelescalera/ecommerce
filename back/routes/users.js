const express = require('express');
const router = express.Router();
const{ User }= require("../models")
const passport = require("passport")

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
    console.log("Logouteo")
      req.logout();
}
res.send("Logout")
});




module.exports = router