import React from "react";
import PropTypes from "prop-types";
 
// componente card
export function Card({ title, content , button}) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {Object.entries(content).map(([key, value]) => (
          <p key={key} className={`card-text`}>
            <span>{key}: </span>
            {value}
            
          </p>
        ))}
        <div className="ml-auto">
            {button}
        </div>
      </div>
    </div>
  );
}




