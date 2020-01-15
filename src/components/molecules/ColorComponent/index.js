import React from "react";
import "./style.scss";

function ColorComponent({ colors = [] }) {
  const renderColors = () =>
    colors.map(c => (
      <span key={c} className={c}>
        &#8226;
      </span>
    ));
  return <div className="color-component">{renderColors()}</div>;
}

export default ColorComponent;
