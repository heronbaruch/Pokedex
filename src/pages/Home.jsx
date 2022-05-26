import React, { useContext, useEffect } from 'react';
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
      <div 
        key={index}
        onClick={() => console.log(pokemon.url)}
        className="pokemons"
      >
        <PokeImg 
          pokeURL={pokemon.url} 
          key={index}
        />
      </div>))
    )
   : 
    <div className="loader-wrapper">
      <div className="">
        <div className="loader loader-inner"></div>
      </div>
    </div>
 }
    </div>
  );
}


export default Home;
