// imports CSS
import { useEffect, useState } from "react";
import "./PokemonDetails.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PokemonDetails(){
  const {id} = useParams();
  const   POKEMON_DETAIL_URL ='https://pokeapi.co/api/v2/pokemon/';
  const [pokemon,setPokemon] = useState(null);

  async function downloadPokemons(){
    const response = await axios.get(POKEMON_DETAIL_URL +id);
    const pokemon = response.data;
    setPokemon({
      name:pokemon.name,
      height:pokemon.height,
      weight: pokemon.weight,
      types:pokemon.types,
      image:pokemon.sprites.other.dream_world.front_default
    });
  }

  useEffect(()=>{
    downloadPokemons();
  },[]);


  return (
    <>
    <div className="pokedex-redirect">
      <h1>
        <Link to="/">
        pokedex
        
        </Link>
      </h1>
    </div>
      {pokemon && <div className="pokemon-details-wrapper">
        <div className="pokemon-detail-name">
          {pokemon.name}
        </div>
        <div className="pokemon-image">
          <img src={pokemon.image} />

        </div>
        <div className="pokemon-atr">
          <div>
            height:{pokemon.height}
          </div>
          <div>
            weight:{pokemon.weight}
          </div>

        </div  >
        <div className="pokemon-type-warapper" >
        <h1>Type:</h1>
        <div className="pokemon-types">
          {pokemon.types.map(t=>  <span key={t.type.name}>{t.type.name}</span>)}
        </div>
        </div>
    </div>}
    </>
  )
}

export default PokemonDetails;