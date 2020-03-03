const Category = require('./categories')
const Order_Product = require('./products')
const Order = require('./order')
const Product = require('./products')
const Review = require('./review')
const User = require('./user')

//MANY TO MANY RELATION BETWEEN PRODUCT AND CATEGORY
Category.belongsToMany(Product, {
    through: "Product_Category"
})

Product.belongsToMany(Category, {
    through: "Product_Category"
})

//ONE TO MANY RELATION BETWEEN USERS AND REVIEW
Review.belongsTo(User)
User.hasMany(Review)

//ONE TO MANY RELATION BETWEEN PRODUCTS AND REVIEW
Review.belongsTo(Product)
Product.hasMany(Review)

//ONE TO MANY RELATION BETWEEN USERS AND ORDER
Order.belongsTo(User)
User.hasMany(Order)

//MANY TO MANY RELATION BETWEEN PRODUCT AND ORDER

Product.belongsToMany(Order, { 
    through: {model: Order_Product},
    as: "orders",
    foreignKey: "orderId",
    otherKey: "productId"
})

Order.belongsToMany(Product, { 
    through: {model: Order_Product},
    as: "product",
    foreignKey: "productId",
    otherKey: "orderId"
})


module.exports = {
    db,
    Category,
    Order_Product,
    Order,
    Product,
    Review,
    User
}



