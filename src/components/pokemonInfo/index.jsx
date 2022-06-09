import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from "react-router-dom";
import Loading from '../Loading'
import Pearl from '../Pearl'
import '../../CSS/infoPokemon.css'
import '../../CSS/typePokemon.css'

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
      <Link to="/">
      <Pearl />
      </Link>
      {
        pokeInfo ?
        (
       <>
       <div className="screens">
       <div className="backgroundInfo">
        <div className="screenStatus">
            <p className="name">{ `${pokeInfo.name} #${pokeInfo.order}` }</p>
          <img
              alt={`${pokeInfo.name} pic`}
              src={pokeInfo.sprites.front_default}
          />
        </div>
      </div>
      {/* renderiza status do pokemon */}
      {/* <h3>Status</h3> */}
              <div className="backgroundStatus">
                <div className="screenStatus">
                  <div>
                  { 
                  pokeInfo.stats.map( (stats, index) => (
                    <p 
                      className="status"
                      key={index}>{ 
                      `${stats.stat.name}:
                      ${ stats.base_stat }` }
                    </p>
                    ))
                  }</div>
                </div>
              </div>
       </div>
        {/* tipo do pokemon */}
              <div>
                <h3>Type</h3>
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
              {/* renderiza gerações que aparece o pokemon */}
              {/* <div>
                <p>Jogos:</p>
                { 
                pokeInfo.game_indices.map( (game, index) => (
                  <p 
                    key={index}> 
                    { game.version.name } 
                  </p>
                  ))
                }
              </div> */}
        </>
        ) : 
        <Loading />
      }
    </div>
  );
};

export default PokemonInfo;