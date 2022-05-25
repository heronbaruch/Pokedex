import React, { useContext, useEffect } from 'react';
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
      <img 
      alt={`${pokemon.name} pic`}
      key={index} 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}/>
      <p>{pokemon.name}</p>
    </div>))
    )
   : <p>Loading</p> }
    </>
  );
}

export default Home;