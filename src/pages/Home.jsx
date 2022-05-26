import React, { useContext, useEffect } from 'react';
import PokeImg from '../components/pokemonImg/index';
import Context from '../context/Context'

function Home(){

  const { data } = useContext(Context);

  useEffect(() => {
}, [data])

  return (
    <>
    { data ?
    ( 
      data.map((pokemon, index) => (
    <div key={index}>
      <PokeImg pokeURL={pokemon.url} key={index}/>
    </div>))
    )
   : <p>Loading</p> }
    </>
  );
}

export default Home;