const express = require('express');
const router = express.Router();
const{ Product }= require("../models")

router.get("/",function(req,res,next){
    Product.findAll(req.body)
    .then(function(products){
        res.json(products)
    })
    .catch(next)
})

router.post("/",function(req,res, next){
    Product.create(req.body)
    .then(function(products){
        res.json(products)
    })
    .catch(next)
})

router.get("/:id",function(req,res){
    Product.findByPk(req.params.id)
    .then(function(products){
        res.json(products)
    })
    .catch(function(err){console.log(err)})
})

router.get("/search",function(req,res){
    Product.findAll(
                        {where:{
                                name:req.body.name
                            }
                        }
                    )
        .then(function(products){
                res.json(products)
        })
})

module.exports= router
