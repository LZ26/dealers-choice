const express = require('express');
const router = express.Router();
const { Hero } = require('../db/models/Hero');
const { Ability } = require('../db/models/Ability');

router.get('/heroes', async (req, res, next) => {
  try {
    const heroes = await Hero.findAll();
    res.send(heroes);
  } catch (err) {
    next(err);
  }
});

router.get('/abilities', async (req, res, next) => {
  try {
    const abilities = await Ability.findAll();
    res.send(abilities);
  } catch (err) {
    next(err);
  }
});

router.get('/heroes/:id', async (req, res, next) => {
  try {
    const hero = await Hero.findByPk(req.params.id, {
      include: Ability,
    });
    res.send(hero);
  } catch (err) {
    next(err);
  }
});

router.get('/abilities/:id', async (req, res, next) => {
  try {
    const hero = await Ability.findByPk(req.params.id);
    res.send(hero);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
