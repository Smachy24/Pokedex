
async function fetchPokemon(name){
  const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemonData = await fetchData.json()
  const pokemonSprite = pokemonData.sprites.front_default
  const pokemonShinySprite = pokemonData.sprites.front_shiny;
  const pokemonName = pokemonData.forms[0].name
  const pokemonId = pokemonData.id;
  const pokemonStats = pokemonData.stats[0].stat.name;
  const pokemonMoves = pokemonData.moves[0].move.name;
  const data = {"pokemonSprite" : pokemonSprite,"pokemonShinySprite": pokemonShinySprite, "pokemonName": pokemonName, "pokemonId": pokemonId, "pokemonStats": pokemonStats, "pokemonMoves":pokemonMoves};
  
  return data;
}

function showPokemonInfo(data){
  document.getElementsByClassName("pokemon-name")[0].innerHTML = "Name : " + data.pokemonName;
  document.getElementsByClassName("pokemon-id")[0].innerHTML = "Pokedex number : " + data.pokemonId;
  document.getElementsByClassName("pokemon-stats")[0].innerHTML = "Stats : " + data.pokemonStats
  document.getElementsByClassName("pokemon-moves")[0].innerHTML = "Moves : " + data.pokemonMoves
  document.getElementsByClassName("pokemon-sprite")[0].src = data.pokemonSprite;
  document.getElementsByClassName("pokemon-shiny-sprite")[0].src = data.pokemonShinySprite;
}

async function main(){
  const dataPokemon = await fetchPokemon("ditto");
  showPokemonInfo(dataPokemon);
}

// main()