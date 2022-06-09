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
        
              {/* tipo do pokemon */}
              <div>
                { 
                pokeInfo.types.map( (type, index) => (
                  <div 
                  className={ `pkm-type ${type.type.name}` } key={index}>
                  <span key={index}>
                    { type.type.name }
                  </span>
                  </div>
                  ))
                }
              </div>
    </>
        ) : 
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
    </>
  );
};

export default PokeImg;