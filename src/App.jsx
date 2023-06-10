import { useEffect, useState } from "react";
import { Pokemons } from "./Pokemons";
import CircularProgress from '@mui/material/CircularProgress';

const App = () => {

  useEffect(() => {

    getPokemons();

  }, []);

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();

    const newPokemonData = await Promise.all(data.results.map(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      return res.json();
    }

    ))

    setPokemons(newPokemonData);
    setLoading(false);

  }

  return (

    <div className="contenedor-principal">

      <h1>👉 Pokedex 1° generación 👈</h1>

      {loading && <div className="barra"><CircularProgress size={100} color="secondary" /></div>}

      <div className="contenedor-pokemons">

        {pokemons.map((pokemon, index) => (

          <div className="card" key={index}>

            <Pokemons pokemon={pokemon} />

          </div>

        ))}

      </div>

    </div>

  )
}

export default App
