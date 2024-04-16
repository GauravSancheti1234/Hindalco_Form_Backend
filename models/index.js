const sequelize = require("../config/db");
// models



const models = {}



models.sequelize = sequelize


module.exports = { models, sequelize }