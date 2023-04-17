import react from 'react';
import logo from './logo.svg';
import './App.css';
import './Pokecard.css';
import pokeData from './pokemonData';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1 className="Pokedex-head">Pokedex</h1>
      <Pokedex pokeData={pokeData} />
    </div>
  );
}

export default App;
