import React, { useEffect, useState } from "react";

function PokeImg(pokeURL) {
  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    const fetchPic = async (infoPokemon)=>{
      const URL = infoPokemon.pokeURL;
      const response = await fetch(URL);
      const dataJson = await response.json();
      setPokeInfo(dataJson);
    }
    fetchPic(pokeURL);
  }, [pokeURL])

  return(
    <>
      {
        pokeInfo ?
        (
        <>
        <img
            alt={`${pokeInfo.name} pic`}
            src={pokeInfo.sprites.front_default}/>
            <p>{ pokeInfo.name }</p>
        </>
        ) : null
      }
    </>
  );
};

export default PokeImg;