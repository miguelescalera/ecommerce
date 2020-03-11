const express = require('express');
const router = express.Router();
const{ User, Order, Order_Product, Product, Review }= require("../models")

//REVISAR EL INCLUDES DE ESTA RUTA
router.get("/:id", async function(req, res, next){
    const result = await Product.findOne({
        where: {id: req.params.id},
        include: [
            {model: Review,
            as: "Reviews",
            required: false,
            attributes: ["id", "description", "rating"],
            include: [{
                model: User,
                as: "User",
                required: false,
                attributes: ["firstName", "lastName"]
            }]
            }
        ]
    })
    res.send(result)
})

router.post("/:id/addreview", async function(req,res,next){
    const review = await Review.create(req.body)
    const user = await User.findByPk(req.user.id)
    const product = await Product.findByPk(req.params.id)
    await review.setUser(user)
    await product.addReview(review)
    res.send(review)
})

module.exports = router