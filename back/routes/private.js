const passport = require("passport");
const Op = require("sequelize").Op
const express = require("express");
const router = express.Router();
const {
  User,
  Order,
  Order_Product,
  Product,
  Category,
  Brand,
  Image,
  Review
} = require("../models");




router.delete("/delete/:id",function(req,res){
  if (req.user.status === 3){
    console.log("params: ", req.params)
    User.findByPk(req.params.id)
    .then(function(user){
      console.log(user)
        user.destroy()
    })
    .then(function(){
      res.send("deleted user")
    })
  }
})
  



//USER ADMIN ROUTES
router.get("/getUsers", function(req, res) {
 
  if (req.user.status < 3){
    return res.status(401).send("Solo para superadmin");
  } 
  else{
    User.findAll()
    .then(function(users){
     
        res.json(users)
    })
  }
});
//GET USERS
router.post("/addAdmin", async function(req, res) {
  console.log("req.user:",req.user)
  if (req.user.status !==3) return res.status(401).send("Solo para superadmin");
  console.log("BODY:",req.body)
  User.findByPk(req.body.id)
  .then(function(user){
    user.update({status:req.body.status})
  }).then(function(){
    
    res.send("usuario modificado");
  })
});

 
 




//ORDERS ADMIN ROUTES

router.get("/orders", function(req, res) {
  Order.findAll({
    include: [
      {
        model: User,
        as: "User",
        require: false,
        attributes: ["email", "firstName", "lastName"]
      },
      {
        model: Product,
        as: "products",
        required: false,
        attributes: ["id", "name"],
        through: {
          model: Order_Product,
          as: "order_products",
          attributes: ["quantity", "totalPrice"]
        }
      }
    ],
    where: { status: { [Op.not]: "cart" } }
  }).then(orders => res.send(orders));
});

router.put("/orders/:id/update", async function(req, res) {
  const { status } = req.body;
  const order = await Order.findOne({
    include: [
      {
        model: User,
        as: "User",
        require: false,
        attributes: ["email", "firstName", "lastName"]
      }
    ]
  });
  order.status = status;
  await order.save();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "winenotp5@gmail.com",
      pass: "plataforma5"
    }
  });
  console.log(order);
  const mailOptions = {
    from: "winenotp5@gmail.com",
    to: order.User.email,
    subject: "Estado de compra Winenot",
    text: `Hola ${order.User.firstName} su orden Numero ${order.id} ha cambiado al status ${order.status} Muchas gracias! 
    WineNot `
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("enviado");
    }
  });
  res.send(order);
});

//PRODUCT ADMIN ROUTES

router.post("/products/add", async function(req, res, next) {
  const product = await Product.create(req.body);
  const [brand] = await Brand.findOrCreate({
    where: {
      name: req.body.brand.name,
      origin: req.body.brand.origin
    }
  });

  product.setBrand(brand);

  req.body.categories.forEach(async element => {
    const [category] = await Category.findOrCreate({
      where: { name: element.name }
    });
    await product.addCategory(category);
  });

  req.body.images.forEach(async element => {
    const image = await Image.create(element);
    await product.addImage(image);
  });

  res.send(product);
});

router.post("/products/:id/delete",  function (req, res, next) {
  const id = req.params.id;
  Product.findByPk(id)
  .then(function(product){
    product.destroy()
  })
  .then(function(){
    Review.findAll({ where: { ProductId: id } })
  })
  .then(function(reviews){
    reviews.forEach(element => element.destroy())
  })
  .then(function(){
    Image.findAll({ where: { ProductId: id } })
  })
  .then(function(images){
    images.forEach(element => element.destroy())
  })
  .then(function(){
    res.sendStatus(200)
  })
  
 
  
})
  
  
  
router.put("/products/:id/modify",function (req, res, next) {
  const id = req.params.id;
  let row = {};
  let products = {};
  if (req.body.product) {
    Product.update(req.body.product, {
      returning: true,
      where: { id }
    }).then(function(product){
    const [row, [products]]=product
    })
  } 
  
  else {
     Product.findByPk(id)
     .then(function(product){
      if (req.body.product.brand){
        Brand.findOrCreate({
          where: {
            name: req.body.product.brand.name,
            origin: req.body.product.brand.origin
          }
        }).then(function(brand){
          const [newBrand] =brand
          product.setBrand(newBrand);
        })
      }
     });
  }
  if (req.body.product.images.deleted){
    const { deleted } = req.body.product.images
    deleted.forEach( img => {
       Image.destroy({ where: { id: img.id } });
    })
  }
  if (req.body.product.images.created) {
    const { created } = req.body.product.images;
    created.forEach( url => {
      Image.create({ url })
      .then(function(images){
        product.addImage(images);
      }).then(function(){
        product.save();
      });
    })
    res.send("product modify!");
  }

})
module.exports = router





    
     

   
  

