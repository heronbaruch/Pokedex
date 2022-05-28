import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../CSS/infoPokemon.css'
import Loading from '../Loading'
import Pearl from '../Pearl'

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

  return(

    <div className="bodyInfo">
      <Pearl />
      {
        pokeInfo ?
        (
      <div className="backgroundInfo">
        <div className="screenPokemon">
            <p>{ `${pokeInfo.name} #${pokeInfo.order}` }</p>
          <img
              alt={`${pokeInfo.name} pic`}
              src={pokeInfo.sprites.front_default}
          />
        </div>
        
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
        <Loading />
      }
    </div>
  );
};

export default PokemonInfo;