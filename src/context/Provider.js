import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState();
  // const [poketInfo, setPokeInfo] = useState();

  const fetchData = async ()=>{
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0';
    const response = await fetch(URL);
    const dataJson = await response.json();
    const { results } = dataJson;
    setData(results);
  }

  // const fetchPic = async ()=>{
  //   const URL = 'https://pokeapi.co/api/v2/pokemon/1/';
  //   const response = await fetch(URL);
  //   const dataJson = await response.json();
  //   const { sprites } = dataJson;
  //   setPokeInfo(sprites.front_default);
  //   console.log(dataJson);
  // }

  useEffect(() => {
    fetchData();
    // fetchPic();
  }, []);

  const contextValue = {
    data,
    // poketInfo,
  };
  
  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
);
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Provider;
