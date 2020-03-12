const express = require("express");
const router = express.Router();
const { Product, Brand, Category, Image , Review, User} = require("../models");
const Sequelize = require('sequelize');
const reviews = require("./reviews")
const Op = Sequelize.Op;

// router.get("/", function(req, res, next) {
//   console.log("entro")
//   if(req.query.name){
//     const name_query = req.query.name.split("20%").join(" ")
//     Product.findAll({
//       include: [
//        {
//         model: Brand,
//         as: "Brand",
//         attributes: ["name","origin"],
//         required: false 
//        },
//        {
//          model: Category,
//          as: "Categories",
//          attributes: ["name"],
//          required: false,
//          througe: "Product_Category"
//        },
//        {
//         model: Image,
//         as: "Images",
//         attributes: ["url"],
//         require: false
//        }
//       ],
//       where: {
//         name: {[Op.iLike]: `%${name_query}%`}
//       }
//     }).then(function(products) {
//     res.send(products);
//   });

  router.get("/", async function(req, res, next) {
    console.log("entro")
    if(req.query.name){
      const name_query = req.query.name.split("20%").join(" ")
      let products = await Product.findAll({
        include: [
         {
          model: Brand,
          as: "Brand",
          attributes: ["name","origin"],
          required: false 
         },
         {
           model: Category,
           as: "Categories",
           attributes: ["name"],
           required: false,
           through: "Product_Category"
         },
         {
          model: Image,
          as: "Images",
          attributes: ["url"],
          require: false
         }
        ],
        where: {
          [Op.or]: {
            name: {
              [Op.iLike]: `%${name_query}%`
            },
            brand: Sequelize.where(Sequelize.col('Brand.name'), {
              [Op.iLike]: `%${name_query}%`
            })
            }
          }
      })
      let productstwo = await Product.findAll({
        include: [
         {
          model: Brand,
          as: "Brand",
          attributes: ["name","origin"],
          required: false 
         },
         {
           model: Category,
           as: "Categories",
           attributes: ["name"],
           required: true,
           where: { name: {[Op.iLike]: `%${name_query}%`}} 
         },
         {
          model: Image,
          as: "Images",
          attributes: ["url"],
          require: false
         }
        ]}) 
        products = products.concat(productstwo)
        res.send(products)
  }else{
    Product.findAll({
      include: [
        {
         model: Brand,
         as: "Brand",
         attributes: ["name","origin"],
         required: false 
        },
        {
          model: Category,
          as: "Categories",
          attributes: ["name"],
          required: false,
          through: "Product_Category"
        },
        {
         model: Image,
         as: "Images",
         attributes: ["url"],
         require: false
        }
       ],
    })
      .then(function(products) {
        res.json(products);
      })
  .catch(next)}
});

router.post("/", function(req, res, next) {
  Product.create(req.body)
    .then(function(products) {
      res.json(products);
    })
    .catch(next);
});

// router.get("/search", function(req, res) {
//   const name_query = req.query.name.split("20%").join(" ")
//   Product.findAll({
//     where: {
//       name: {[Op.like]: `%${name_query}%`}
//     }
//   }).then(function(products) {
//     res.send(products);
//   });
// });

router.get("/brands", async function(req,res,next){
  Brand.findAll()
  .then(brands => res.send(brands))
})

router.get("/categories", async function(req,res,next){
  Category.findAll()
  .then(categories => res.send(categories))
})

router.get("/:id", function(req, res) {
  Product.findByPk(req.params.id,
    {
      include: [
        {
         model: Brand,
         as: "Brand",
         attributes: ["name","origin"],
         required: false 
        },
        {
          model: Category,
          as: "Categories",
          attributes: ["name"],
          required: false,
          througe: "Product_Category"
        },
        {
         model: Image,
         as: "Images",
         attributes: ["url"],
         require: false
        },
        {
          model: Review,
          as: "Reviews",
          attributes: ["rating", "description"],
          require: false,
          include: {
            model: User,
            as: "User",
            required: false,
            attributes: ["firstName", "lastName"]
          }
         }
       ]
    })
    .then(function(products) {
      res.send(products);
    })
    .catch(function(err) {
      console.log(err);
    });
});



router.use("/reviews", reviews)

module.exports = router;