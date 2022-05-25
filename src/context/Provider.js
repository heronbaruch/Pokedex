import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState();

  const fetchData = async ()=>{
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(URL);
    const dataJson = await response.json();
    const { results } = dataJson;
    setData(results);
    console.log(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    data,
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
