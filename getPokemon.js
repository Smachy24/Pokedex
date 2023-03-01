
async function fetchPokemon(name){
  let fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  let pokemonData = await fetchData.json()
  let pokemonSprite = pokemonData.sprites.front_default
  let pokemonName = pokemonData.forms[0].name
  let pokemonDescription = null;
  let pokemonPokedexNumber = null;
  let pokemonEvolutions = null;
  let pokemonStats = null;
  let pokemonMoves = null;
  let pokemonShinySprite = null;
  
  
  document.getElementsByClassName("pokemon-name")[0].innerHTML = "Name : " + pokemonName
  
  spriteEl = document.getElementsByClassName("pokemon-sprite");
  spriteEl[0].src = pokemonSprite
}

fetchPokemon("ditto")