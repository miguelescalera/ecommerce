const db = require("../../db")
const S  = require('sequelize');

class Review extends S.Model {}

Review.init({ 
    description: {
    type: S.TEXT
    },
    rating: {
        type: S.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    }
  
}, {
  sequelize: db,
  modelName: 'Review' 
});

module.exports = Review