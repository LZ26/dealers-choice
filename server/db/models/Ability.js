const db = require('../db');
const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize;

const Ability = db.define('ability', {
  name: {
    type: STRING,
  },

  damageOutput: {
    type: INTEGER,
  },

  manacost: {
    type: INTEGER,
  },

  cooldown: {
    type: INTEGER,
  },
});
module.exports = {
  Ability,
};
