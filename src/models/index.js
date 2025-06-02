const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize.DataTypes);
db.Product = require('./product.model')(sequelize, Sequelize.DataTypes);
db.Order = require('./order.model')(sequelize, Sequelize.DataTypes);

// Associations
db.Product.hasMany(db.Order);
db.Order.belongsTo(db.Product);

module.exports = db;