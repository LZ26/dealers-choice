const db = require('./db');
const { Ability } = require('./models/Ability');
const { Hero } = require('./models/Hero');

Hero.hasMany(Ability);
Ability.belongsTo(Hero);

const syncAndSeed = async () => {
  await db.sync({ force: true });

  const [Invoker, Void, Ember, Axe] = await Promise.all([
    Hero.create({
      name: 'Invoker',
      bio:
        'In its earliest, and some would say most potent form, magic was primarily the art of memory. It required no technology, no wands or appurtenances other than the mind of the magician. All the trappings of ritual were merely mnemonic devices, meant to allow the practitioner to recall in rich detail the specific mental formulae that unlocked a spell power. The greatest mages in those days were the ones blessed with the greatest memories, and yet so complex were the invocations that all wizards were forced to specialize.',

      attribute: 'Intelligence',
      pictureUrl:
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/invoker_full.png?v=6064412?v=6064412',
    }),
    Hero.create({
      name: 'Void',
      bio:
        'Darkterror the Faceless Void is a visitor from Claszureme, a realm outside of time. It remains a mystery why this being from another dimension believes the struggle for the Nemesis Stones is worth entering our physical plane, but apparently an upset in the balance of power in this world has repercussions in adjacent dimensions. Time means nothing to Darkterror, except as a way to thwart his foes and aid his allies. His long-view of the cosmos has given him a remote, disconnected quality, although in battle he is quite capable of making it personal. ',
      attribute: 'Agility',
      pictureUrl:
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/faceless_void_full.png?v=6064412?v=6064412',
    }),
    Hero.create({
      name: 'Ember',
      bio: `Lost within the Wailing Mountains, the Fortress of Flares lay abandoned, its training halls empty, its courtyard covered in leaves and dust. Upon a dais in its sealed temple rests a topaz cauldron filled with ancient ash, remnants of a pyre for the warrior-poet Xin. For three generations, Xin taught his acolytes the Bonds of the Guardian Flame, a series of mantras to train the mind and body for the harsh realities beyond the fortress walls. However, in teaching a warrior's way he earned a warrior's rivals, and in his autumn Xin was bested and slain. His followers spread to the wind. Yet as years turned to centuries and followers to descendants, his teachings endured by subtle whisper and deed. Touched by the teacher's lasting legacy, the Burning Celestial, inquisitive aspect of fire, cast himself to the Fortress of Flares and reignited the pyre ash. From these glowing embers emerged an image of Xin, wreathed in flame, his thoughtful countenance prepared to train and to teach, and to spread the fires of knowledge to all who seek guidance.`,

      attribute: 'Agility',
      pictureUrl:
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/ember_spirit_full.png?v=6064412?v=6064412',
    }),
    Hero.create({
      name: 'Axe',
      bio: `As a grunt in the Army of Red Mist, Mogul Khan set his sights on the rank of Red Mist General. In battle after battle he proved his worth through gory deed. His rise through the ranks was helped by the fact that he never hesitated to decapitate a superior. Through the seven year Campaign of the Thousand Tarns, he distinguished himself in glorious carnage, his star of fame shining ever brighter, while the number of comrades in arms steadily dwindled. On the night of ultimate victory, Axe declared himself the new Red Mist General, and took on the ultimate title of 'Axe.' But his troops now numbered zero. Of course, many had died in battle, but a significant number had also fallen to Axe's blade. Needless to say, most soldiers now shun his leadership. But this matters not a whit to Axe, who knows that a one-man army is by far the best.`,
      attribute: 'Strength',
      pictureUrl:
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/axe_full.png?v=6064412?v=6064412',
    }),
  ]);

  const [
    sunStrike,
    chronoSphere,
    searingChains,
    cullingBlade,
  ] = await Promise.all([
    Ability.create({
      name: 'Sun strike',
      damageOutput: 500,
      manacost: 200,
      cooldown: 60,
      heroId: Invoker.id,
    }),
    Ability.create({
      name: 'Chronosphere',
      damageOutput: 0,
      manacost: 300,
      cooldown: 140,
      heroId: Void.id,
    }),
    Ability.create({
      name: 'Searing Chains',
      damageOutput: 200,
      manacost: 75,
      cooldown: 7,
      heroId: Ember.id,
    }),
    Ability.create({
      name: 'Culling Blade',
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
