import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import PokeImg from '../components/pokemonImg/index';
import Context from '../context/Context'
import '../CSS/home.css'
import '../CSS/loading.css'

function Home(){

  const { data } = useContext(Context);

  useEffect(() => {
}, [data])

  return (
    <div
    className="pokeDiv"
    >
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
  <div className="pokeLoad">
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader loader-inner">
          <div className="center"></div>
        </div>
      </div>
    </div>
  </div>
 }
    </div>
  );
}


export default Home;
