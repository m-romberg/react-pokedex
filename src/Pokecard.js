const POKEMON_IMG_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
/**
 * Pokecard:
 * Takes in pokemon data,
 * returns single jsx pokecard
*/

function Pokecard (id, name, type, base_experience){
  const imgSrc = `${POKEMON_IMG_API}/${id}.png`;
  return (
  <div className='Pokecard'>
    <p className="PokeCard-name">{ name }</p>
    <img src={ imgSrc } alt="pokemon"></img>
    <p className="PokeCard-type">{ type }</p>
    <p className="PokeCard-exp">{ base_experience }</p>
  </div>
  );
}

export default Pokecard;