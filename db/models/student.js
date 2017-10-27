var Sequelize = require('sequelize');
var db = require('../db');

var Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    isUnique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Student
