const POKEMON_IMG_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
/**
 * Pokecard:
 * Takes in pokemon data,
 * returns single jsx pokecard
*/

function Pokecard (pokemonData){
  const imgSrc = `${POKEMON_IMG_API}/${pokemonData.id}.png`;
  return (
  <div className='Pokecard'>
    <p className="PokeCard-name">{ pokemonData.name }</p>
    <img src={ imgSrc } alt="pokemon"></img>
    <p className="PokeCard-type">{ pokemonData.type }</p>
    <p className="PokeCard-exp">{ pokemonData.base_experience }</p>
  </div>
  );
}

export default Pokecard;