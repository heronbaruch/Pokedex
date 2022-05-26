import React, { useEffect, useState } from "react";
import '../../CSS/loading.css'

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
            src={pokeInfo.sprites.front_default}
        />
            <p>{ pokeInfo.name }</p>
    </>
        ) : 
        <div className="loader-wrapper">
          <div className="loader">
           <div className="loader loader-inner"></div>
          </div>
        </div>
      }
    </>
  );
};

export default PokeImg;