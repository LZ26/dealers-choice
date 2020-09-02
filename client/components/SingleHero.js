import React from 'react';

const SingleHero = ({ selectedHero }) => {
  const { abilities } = selectedHero;
  return (
    <div id="single-hero">
      {abilities.map((ability) => {
        return (
          <div>
            <h1>{selectedHero.name}</h1>
            <img src={selectedHero.pictureUrl}></img>
            <p>
              <strong>Bio:</strong> {selectedHero.bio}
            </p>
            <p>
              <strong>Attribute:</strong> {selectedHero.attribute}{' '}
            </p>
            <p>
              <strong>Favorite Ability:</strong> {ability.name}{' '}
            </p>
            <p>
              <strong>Damage Output:</strong> {ability.damageOutput}{' '}
            </p>
            <p>
              <strong>Manacost:</strong> {ability.manacost}{' '}
            </p>
            <p>
              <strong>Cooldown:</strong> {ability.cooldown}{' '}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleHero;
