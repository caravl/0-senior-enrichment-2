var db = require('../db');
var Sequelize = require('sequelize');

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Campus
