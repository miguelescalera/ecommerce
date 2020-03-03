const Category = require('./categories')
const Order = require('./orders')
const Product = require('./products')
const Review = require('./reviews')
const User = require('./users')
const db = require("../db")
const Order_Product = require('./orderproducts')

//MANY TO MANY RELATION BETWEEN PRODUCT AND CATEGORY
Category.associate = (models) => {
Category.belongsToMany(models.Product, {
    through: "Product_Category"
})
}

Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
        through: "Product_Category"
    })
}

//ONE TO MANY RELATION BETWEEN USERS AND REVIEW
Review.associate = (models) => {
    Review.belongsTo(models.User)
}

User.associate = (models) => {
    User.hasMany(models.Review)
}

//ONE TO MANY RELATION BETWEEN PRODUCTS AND REVIEW

Review.associate = (models) => {
    Review.belongsTo(models.Product)
}

Product.associate = (models) => {
    Product.hasMany(models.Review)
}

//ONE TO MANY RELATION BETWEEN USERS AND ORDER

Order.associate = (models) => {
    Order.belongsTo(models.User)
}

User.associate = (models) => {
    User.hasMany(models.Order)
}

//MANY TO MANY RELATION BETWEEN PRODUCT AND ORDER

Product.associate = (models) => {
    Product.belongsToMany(models.sOrder, { 
        through: {model: models.Order_Product},
        as: "orders",
        foreignKey: "orderId",
        otherKey: "productId"
    })
}

Order.associate = (models) => {
    Order.belongsToMany(models.Product, { 
        through: {model: Order_Product},
        as: "product",
        foreignKey: "productId",
        otherKey: "orderId"
    })
}

module.exports = {
    db,
    Category,
    Order,
    Product,
    Review,
    User,
    Order_Product,
}



