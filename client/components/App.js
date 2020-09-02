import React from 'react';
import axios from 'axios';
import HeroesList from './HeroesList';
import SingleHero from './SingleHero';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heroes: [],
      abilities: [],
      selectedHero: {},
    };
  }

  async componentDidMount() {
    const hashFunc = async () => {
      const id = window.location.hash.slice(1);
      if (id) {
        const { data } = await axios.get(`/api/heroes/${id}`);
        this.setState({
          selectedHero: data,
        });
      } else {
        this.setState({
          selectedHero: {},
        });
      }
    };

    window.addEventListener('hashchange', hashFunc);
    hashFunc();

    const heroes = (await axios.get('/api/heroes')).data;
    const abilities = (await axios.get('/api/abilities')).data;

    this.setState({ heroes, abilities });
  }

  render() {
    const { heroes } = this.state;
    return (
      <div id="hero-list">
        {this.state.selectedHero.id ? (
          <SingleHero selectedHero={this.state.selectedHero} />
        ) : (
          <HeroesList heroes={heroes} />
        )}
      </div>
    );
  }
}

export default App;
