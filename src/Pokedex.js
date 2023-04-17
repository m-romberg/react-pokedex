import Pokecard from './Pokecard'
/**
 * Pokedex:
 * Takes in an array of pokemon data and
 * returns an array of jsx pokecards
 */
function Pokedex({pokeData}) {

  return (
    <div>
      {pokeData.map(
        poke => (
        <Pokecard 
          pokemon={poke} />)
      )}
    </div>

  );


  // return pokecardComponents;

}

export default Pokedex;