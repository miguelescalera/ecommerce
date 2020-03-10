const db = require("../../db");
const S = require("sequelize");
class Image extends S.Model {}

Image.init(
  {
    url: {
      type: S.STRING
    }
  },
  {
    sequelize: db,
    modelName: "Image"
  }
);
module.exports = Image;