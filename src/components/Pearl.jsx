import React from "react";
import '../CSS/Pearl.css'

function Loading() {
  return(
    <div className="container">
      <div className="pearl-wrapper">
        <div className="pearl">
          <div className="pearl pearl-inner">
            <div className="centerpearl"></div>
          </div>
        </div>
      </div>
      <div className="redCircle"/>
      <div className="yellowCircle"/>
      <div className="greenCircle"/>
    </div>
  );
}

export default Loading;