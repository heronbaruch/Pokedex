import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../CSS/loading.css'

function PokemonInfo() {
  const [pokeInfo, setPokeInfo] = useState();
  let { name } = useParams();

  useEffect(() => {
    const fetchPic = async (name)=>{
      const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(URL);
      const dataJson = await response.json();
      setPokeInfo(dataJson);
    }
    fetchPic(name);
  }, [name])

  console.log(name);

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

export default PokemonInfo;