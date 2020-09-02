const db = require('../db');
const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;

const Hero = db.define('hero', {
  name: {
    type: STRING,
    allowNull: false,
  },

  bio: {
    type: TEXT,
  },

  attribute: {
    type: STRING,
  },

  pictureUrl: {
    type: STRING,
  },
});

module.exports = {
  Hero,
};
