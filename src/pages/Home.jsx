import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import PokeImg from '../components/pokemonImg/index';
import Context from '../context/Context'
import Loading from '../components/Loading';
import '../CSS/home.css'

function Home(){

  const { data } = useContext(Context);

  useEffect(() => {
}, [data])

  return (
    <div className="body">
      <div className="pokeDiv">
    { data ?
    ( 
      data.map((pokemon, index) => (
        <Link 
        to={`/pokemon-detail/${pokemon.name}`} 
        key={index}
        >
          <div 
            key={index}
            onClick={() => console.log(pokemon.url)}
            className="pokemons"
            >
            <PokeImg 
              pokeURL={pokemon.url} 
              key={index}
              />
          </div>
        </Link>
      ))
    )
   : 
    <Loading />
 }
    </div>
    </div>
  );
}


export default Home;
