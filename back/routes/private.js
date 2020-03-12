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
      console.log("todos los usuarios: ",users)
        res.json(users)
    })
  }
});
//GET USERS
router.get("/addAdmin", async function(req, res) {
  if (req.user.status < 3) return res.status(401).send("Solo para superadmin");
  const user = await User.findByPk(req.body.id);
  user.status = req.body.status;
  await user.save();
  res.send(user);
});




//ORDERS ADMIN ROUTES

router.get("/orders", function (req, res) {
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

router.put("/orders/:id/update", async function (req, res) {
  const { status } = req.body;
  const order = await Order.findByPk(req.params.id);
  order.status = status;
  await order.save();
  res.send(order);
});

//PRODUCT ADMIN ROUTES

router.post("/products/add", async function(req, res, next) {
  console.log(req.body);
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

router.delete("/products/:id/delete", async function (req, res, next) {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  const images = await Image.findAll({ where: { ProductId: id } });
  images.forEach(element => element.destroy());
  const reviews = await Review.findAll({ where: { ProductId: id } });
  reviews.forEach(element => element.destroy());
  await product.destroy();
  res.sendStatus(200);
});

router.put("/products/:id/modify", async function (req, res, next) {
  const id = req.params.id;
  let row = {};
  let product = {};
  if (req.body.product) {
    [row, [product]] = await Product.update(req.body.product, {
      returning: true,
      where: { id }
    });
  } else {
    product = await Product.findByPk(id);
  }

  if (req.body.brand) {
    const [brand] = await Brand.findOrCreate({
      where: {
        name: req.body.brand.name,
        origin: req.body.brand.origin
      }
    });
    product.setBrand(brand);
  }
  if (req.body.images.deleted) {
    const { deleted } = req.body.images;
    deleted.forEach(async imgid => {
      await Image.destroy({ where: { id: imgid } });
    });
  }
  if (req.body.images.created) {
    const { created } = req.body.images;
    created.forEach(async url => {
      Images.create({ url });
      await product.addImage(image);
    });
  }
  await product.save();
  res.send(product);
});

module.exports = router;
