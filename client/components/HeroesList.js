import React from 'react';

const HeroesList = ({ heroes }) => {
  return (
    <div id="hero-page">
      <h1>Dota 2 Heroes</h1>
      <ul>
        {heroes.map((hero) => {
          return (
            <a href={`#${hero.id}`}>
              <li> {hero.name}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default HeroesList;
