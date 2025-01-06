// // CSS imports
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
function PokemonList() {
  const [PokemonListState, setPokemonListState] = usePokemonList();

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
