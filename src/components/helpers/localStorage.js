// controle pokemon favorito
export const setFavPokemon = (pokemonInfo) => {
  if (JSON.parse(localStorage.getItem('pokemon'))){
    const pokemonList = JSON.parse(localStorage.getItem('pokemon')) || [];
    const newPokemon =  [...pokemonList, pokemonInfo];
    localStorage.setItem('pokemon', JSON.stringify(newPokemon));
  }else {
    const newPokemon =  [pokemonInfo];
    localStorage.setItem('pokemon', JSON.stringify(newPokemon));
  }
};

export const excludePokemon = (unFavPokemon) => {
  const localPokemons = JSON.parse(localStorage.getItem('pokemon'));
  console.log(unFavPokemon.name);
  const temp = localPokemons.filter(({ name: nome }) => nome !== unFavPokemon.name);
  console.log(temp);
  localStorage.setItem('pokemon', JSON.stringify(temp))
};