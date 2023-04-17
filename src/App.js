import react from 'react';
import logo from './logo.svg';
import './App.css';
import pokeData from './pokemonData';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokeData={pokeData}/>
    </div>
  );
}

export default App;
