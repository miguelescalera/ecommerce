const express = require('express');
const router = express.Router();
const{ User }= require("../models")
const passport = require("passport")

router.post("/addAdmin",passport.authenticate('local'),function(req,res){
    if(req.user.status===3){
        User.findByPk(req.body.id)
        .then(function(user){
                user.update({status:req.body.status})
        })
    }
})

module.exports= router