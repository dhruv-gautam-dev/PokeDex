// // CSS imports
import "./PokemonList.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
function PokemonList() {
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
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

  async function downloadPokemons() {
    const response = await axios.get(
      PokemonListState.pokedexUrl ? PokemonListState.pokedexUrl : DEFAULT_URL
    );

    const pokemonResults = response.data.results; // array of pokemons

    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);

    // setPokemonListState((state)=>({...state,nextUrl: response.data.next, prevUrl: response.data.prevUrl}));

    const pokemonPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const pokemonListData = await axios.all(pokemonPromise);

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

  useEffect(() => {
    downloadPokemons();
  }, [PokemonListState.pokedexUrl]);

  return (
    <div className="pokemon-list-wrapper">
      <div>
        <h1>Pokemon List</h1>
      </div>
      <div className="page-controls">
        <button
          onClick={() =>
            setPokemonListState({
              ...PokemonListState,
              pokedexUrl: PokemonListState.prevUrl,
            })
          }
        >
          Prev
        </button>
        <button
          onClick={() =>
            setPokemonListState({
              ...PokemonListState,
              pokedexUrl: PokemonListState.nextUrl,
            })
          }
        >
          Next
        </button>
      </div>
      <div className="pokemon-list">
        {PokemonListState.pokemonList.map((pokemon) => (
          <Pokemon
            name={pokemon.name}
            key={pokemon.id}
            url={pokemon.image}
            id={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}
export default PokemonList;
