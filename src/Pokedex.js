import Pokecard from './Pokecard'
/**
 * Pokedex:
 * Takes in an array of pokemon data [{ id, name, type, base_experience },....]
 * returns an div element of array of jsx pokecards 
 */
function Pokedex({ pokeData }) {

  return (
    <div className = "Pokedex"> 
      {pokeData.map(
        poke => (
          <Pokecard
            id={poke.id}
            name={poke.name}
            type={poke.type}
            base_experience={poke.base_experience} />)
      )}
    </div>

  );

}

export default Pokedex;