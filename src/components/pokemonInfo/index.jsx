import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from "react-router-dom";
import Loading from '../Loading'
import Pearl from '../Pearl'
import '../../CSS/infoPokemon.css'
import '../../CSS/typePokemon.css'
import '../../CSS/favStats.css'
import { setFavPokemon, excludePokemon } from '../helpers/localStorage'

function PokemonInfo() {
  const [pokeInfo, setPokeInfo] = useState();
  const [savePokemon, setSavePokemon] = useState(false);
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

  const favPokemon = (savePokemon) =>{
    setSavePokemon(savePokemon)
    const pokemon = {
      name: pokeInfo.name
    }
    
    if(savePokemon){
      console.log('true');
      setFavPokemon(pokemon);
    }else {
      console.log('false');
      excludePokemon(pokemon)
    }
  }

  return(

    <div className="bodyInfo">
      <Link to="/">
      <Pearl />
      </Link>
      {
        pokeInfo ?
        (
       <>
      <label className="favStats">
        <input type="checkbox" onClick={() => favPokemon(!savePokemon)}/>
          <span className="checkmark"></span>
      </label>

       <div className="screens">
       <div className="backgroundInfo">
        <div className="screenStatus">
            <p className="name">{ `${pokeInfo.name} #${pokeInfo.id}` }</p>
          <img
              alt={`${pokeInfo.name} pic`}
              src={pokeInfo.sprites.front_default}
          />
        </div>
      </div>
      {/* renderiza status do pokemon */}
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
            <div className="typeControl">
              <div className="typeContainer">
                <h3>Type</h3>
                 <div className="type">{ 
                pokeInfo.types.map( (type, index) => (
                  <div 
                  className={ `pkm-type ${type.type.name}` } key={index}>
                  <span key={index}>
                    { type.type.name }
                  </span>
                  </div>
                  ))
                }</div>
              </div>
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