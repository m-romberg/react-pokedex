const POKEMON_IMG_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`
/**
 * Pokecard:
 * Takes in pokemon data, {id, name, type, base_experience }
 * returns single jsx pokecard as div element
*/

function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `${POKEMON_IMG_API}/${id}.png`;

  return (
    <div className='Pokecard'>
      <p className="Pokecard-name">{name}</p>
      <img src={imgSrc} alt="pokemon"></img>
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {base_experience}</p>
    </div>
  );
}

export default Pokecard;