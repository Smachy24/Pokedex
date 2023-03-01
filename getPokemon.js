
async function fetchPokemon(){
  let fetchData = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  let pokemonData = await fetchData.json()
  let pokemonSprite = pokemonData.sprites.front_default
  console.log(pokemonData)
  
  spriteEl = document.getElementsByClassName("pokemon-sprite");
  spriteEl[0].src = pokemonSprite
  console.log(spriteEl.src)
}

// fetchPokemon()