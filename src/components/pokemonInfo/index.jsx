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

  console.log(pokeInfo.game_indices[0].version);

  return(
    <>
      {
        pokeInfo ?
        (
        <div>
          <p>{ `${pokeInfo.name} #${pokeInfo.order}` }</p>
        <img
            alt={`${pokeInfo.name} pic`}
            src={pokeInfo.sprites.front_default}
        />
            {/* tipo do pokemon */}
            <div>
              <p>Tipo</p>
              { 
              pokeInfo.types.map( (type, index) => (
                <p key={index}>{ type.type.name }</p>
                ))
              }
            </div>
            {/* renderiza status do pokemon */}
            <div>
              <p>Status</p>
              { 
              pokeInfo.stats.map( (stats, index) => (
                <p 
                  key={index}>{ 
                  `${stats.stat.name}:
                  ${ stats.base_stat }` }
                </p>
                ))
              }
            </div>
            {/* renderiza gerações que aparece o pokemon */}
            <div>
              <p>Jogos:</p>
              { 
              pokeInfo.game_indices.map( (game, index) => (
                <p 
                  key={index}> 
                  { game.version.name } 
                </p>
                ))
              }
            </div>
            
    </div>
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