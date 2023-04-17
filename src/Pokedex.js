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
          id = {poke.id}
          name = {poke.name}
          type = {poke.type}
          base_experience = {poke.base_experience} />)
      )}
    </div>

  );


  // return pokecardComponents;

}

export default Pokedex;