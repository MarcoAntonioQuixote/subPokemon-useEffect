import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCard from './components/PokemonCard.js';

function App() {

    let ids = [1,111,34,76,93,149,151,59]

    let [pokemons,setPokemons] = useState([])

    useEffect(() => {

        // how to render the array

        const fetchPoke = async () => {

            for (let id of ids) {
              let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
              let name = res.data.name;
              let type = res.data.types[0].type.name;
              let image = res.data.sprites.front_default;
              let pokeObject = {name,type,image};
              setPokemons(prev => [...prev,pokeObject])
            }
        }

        fetchPoke();

    },[])
    
    const showCards = pokemons.map((pokemon,i) => {

        // if (pokemon.name === 'golem') return null;

        return (
            <PokemonCard poke={pokemon} key={i} />
        )
    })


  return (
    <div className="App-header">
        Pokemon App

        <div className='pokeCage'>

            {showCards}
        </div>
        {/* <PokemonCard poke={poke} /> */}
    </div>
  );
}

export default App;
