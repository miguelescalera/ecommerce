const express = require('express');
const router = express.Router();
const{ User }= require("../models")
const passport = require("passport")

router.post("/register",function(req,res,next){
        User.create(req.body).catch(next)
        
})

router.post("/login",passport.authenticate('local'),function(req,res){
    res.send(req.user)
})

router.post('/logout', function(req, res){
if (req.isAuthenticated()) {
    console.log("Logouteo")
      req.logout();
}
});

module.exports = router