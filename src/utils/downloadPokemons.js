import axios from "axios";

async function downloadPokemons(PokemonListState, setPokemonListState, defaultUrl,limit = 20) {


  const response = await axios.get(
    PokemonListState.pokedexUrl ? PokemonListState.pokedexUrl : defaultUrl
  );

  let pokemonResults = response.data.results ?response.data.results  : response.data.pokemon ; // array of pokemons
  pokemonResults=pokemonResults.slice(0,limit);
  // setNextUrl(response.data.next);
  // setPrevUrl(response.data.previous);

  // setPokemonListState((state)=>({...state,nextUrl: response.data.next, prevUrl: response.data.prevUrl}));

  const pokemonPromise = pokemonResults.map((p) =>{
    if(p.url){

      return  axios.get(p.url)
    
    }else if(p.pokemon.url){
      return axios.get(p.pokemon.url);
    }
  });

  const pokemonListData = await axios.all(pokemonPromise);
  console.log(pokemonListData);
  const pokemonFinalList = pokemonListData.map((pokemonData) => {
    const pokemon = pokemonData.data;
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });
  // setPokemonList(pokemonFinalList);
  setPokemonListState({
    ...PokemonListState,
    pokemonList: pokemonFinalList,
    nextUrl: response.data.next,
    prevUrl: response.data.previous,
  });
}

export default downloadPokemons;