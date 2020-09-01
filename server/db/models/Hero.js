const db = require('../db');
const Sequelize = require('sequelize');
const { STRING } = Sequelize;

const Hero = db.define('hero', {
  name: {
    type: STRING,
    allowNull: false,
  },

  attribute: {
    type: STRING,
  },
});

module.exports = {
  db,
  Hero,
};
