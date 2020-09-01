const db = require('./db');
const { Ability } = require('./models/Ability');
const { Hero } = require('./models/Hero');
Hero.hasMany(Ability);
Ability.belongsTo(Hero);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const [Invoker, Void, Ember, Axe] = await Promise.all([
    Hero.create({ name: 'Invoker', attribute: 'intelligence' }),
    Hero.create({ name: 'Void', attribute: 'agility' }),
    Hero.create({ name: 'Ember', attribute: 'agility' }),
    Hero.create({ name: 'Axe', attribute: 'strength' }),
  ]);

  const [
    sunStrike,
    chronoSphere,
    searingChains,
    cullingBlade,
  ] = await Promise.all([
    Ability.create({
      name: 'sunStrike',
      damageOutput: 500,
      manacost: 200,
      cooldown: 60,
      heroId: Invoker.id,
    }),
    Ability.create({
      name: 'chronoSphere',
      damageOutput: 0,
      manacost: 300,
      cooldown: 140,
      heroId: Void.id,
    }),
    Ability.create({
      name: 'searingChains',
      damageOutput: 200,
      manacost: 75,
      cooldown: 7,
      heroId: Ember.id,
    }),
    Ability.create({
      name: 'cullingBlade',
      damageOutput: 350,
      manacost: 100,
      cooldown: 40,
      heroId: Axe.id,
    }),
  ]);
};

module.exports = {
  db,
  syncAndSeed,
  Hero,
  Ability,
};
