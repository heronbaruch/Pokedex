import React from "react";
import '../CSS/loading.css'

function Loading() {
  return(
    <div className="pokeLoad">
    <div className="loader-wrapper">
      <div className="loader">
      <div className="loader loader-inner">
        <div className="center"></div>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Loading;