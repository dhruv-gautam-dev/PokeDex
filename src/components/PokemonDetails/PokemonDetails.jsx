// imports CSS
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";

function PokemonDetails() {
  const { id } = useParams();

  // custom hookk
  const [pokemon, pokemonListState] = usePokemon(id);

  return (
    <>
      <div className="pokedex-redirect">
        <h1>
          <Link to="/">pokedex</Link>
        </h1>
      </div>
      {pokemon && (
        <div className="pokemon-details-wrapper">
          <div className="pokemon-detail-name">{pokemon.name}</div>
          <div className="pokemon-image">
            <img src={pokemon.image} />
          </div>
          <div className="pokemon-atr">
            <div>height:{pokemon.height}</div>
            <div>weight:{pokemon.weight}</div>
          </div>
          <div className="pokemon-type-warapper">
            <h1>Type:</h1>
            <div className="pokemon-types">
              {pokemon.types.map((t) => (
                <span key={t.type.name}>{t.type.name}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="similer-pokemons">
        <h1>Similer Pokemons</h1>
        <div className="pokemon-similer-boxes">
          {pokemonListState.pokemonList.length > 0 &&
            pokemonListState.pokemonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                url={pokemon.image}
                id={pokemon.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
