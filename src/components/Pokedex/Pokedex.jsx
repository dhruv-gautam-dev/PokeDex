// css imports

import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import "./Pokedex.css";
import { useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pokidex-wrapper">
      <h1>POKEDEX</h1>
      <Search updateSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <PokemonDetails pokemonName={searchTerm} />
      ) : (
        <PokemonList />
      )}
    </div>
  );
}
export default Pokedex;
