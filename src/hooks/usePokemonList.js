import { useEffect, useState } from "react";
import downloadPokemons from "../utils/downloadPokemons";

function usePokemonList(DEFAULT_URL){

  // const [pokemonList,setPokemonList] =useState([]);
  // const [pokedexUrl,setPokedexUrl] =useState(DEFAULT_URL);

  // const [nextUrl ,setNextUrl] =useState(DEFAULT_URL);
  // const [prevUrl ,setPrevUrl] =useState(DEFAULT_URL);

  const [PokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedexUrl: DEFAULT_URL,
    nextUrl: DEFAULT_URL,
    prevUrl: DEFAULT_URL,
  });

  

  useEffect(() => {
    downloadPokemons(PokemonListState, setPokemonListState, DEFAULT_URL);
  }, [PokemonListState.pokedexUrl]);

  return [PokemonListState,setPokemonListState];

}
export default usePokemonList;