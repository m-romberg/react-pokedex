import Pokecard from './Pokecard'
/**
 * GetPokedexComponents:
 * Takes in an array of pokemon data and
 * returns an array of jsx pokecards
 */
function GetPokedexComponents(pokeData) {

  const pokecardComponents = pokeData.map(
    poke => <Pokecard pokeData={poke}/>
  )
  return pokecardComponents;

}

export default GetPokedexComponents;