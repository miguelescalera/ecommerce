const express = require('express');
const router = express.Router();
const{ Product }= require("../models")

router.get("/",function(req,res){
    Product.findAll(req.body)
    .then(function(products){
        res.json(products)
    })
    .catch(function(err){console.log(err)})
})

router.post("/",function(req,res){
    Product.create(req.body)
    .then(function(products){
        res.json(products)
    })
    .catch(function(err){console.log(err)})
})

router.get("/:id",function(req,res){
    Product.findByPk(req.params.id)
    .then(function(products){
        res.json(products)
    })
    .catch(function(err){console.log(err)})
})

router.get("/searchProducts",function(req,res){
    Product.findAll(
                        {where:{
                                name:req.query.name
                            }
                        }
                    )
        .then(function(products){
                res.json(products)
        })
})

module.exports= router
