import React from "react";
import './DisplayComponent.css'

const DisplayComponent = (props) => {
  return (
    <div className="display-digit">
      
      <span className="digit">{props.time.h >= 10 ? props.time.h: "0"+props.time.h }</span>
      <span className="colon">:</span>
      <span className="digit">{props.time.m >= 10 ? props.time.m: "0"+props.time.m }</span>
      <span className="colon">:</span>
      <span className="digit">{props.time.s >= 10 ? props.time.s: "0"+props.time.s }</span>
      <span className="colon">:</span>
      <span className="digit">{props.time.ms >= 10 ? props.time.ms: "0"+props.time.ms }</span>
    
    </div>
  );
};

export default DisplayComponent;
