import React, { Component } from "react";
import "../descriptionComponent/description.css";

const Description = props => {
  return (
    <div className="description-container">
      <span>
        {props.description}
      </span>
    </div>
  );
};

export default Description;
