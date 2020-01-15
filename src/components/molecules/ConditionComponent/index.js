import React from "react";
import "./style.scss";
import classnames from "classnames";

export const ConditionColor = {
  RED: "background-red",
  GREEN: "background-green"
};

function ConditionComponent({ bgColor, children, className, style }) {
  const classes = classnames(className, bgColor, "condition-color-compontent");

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
}

export default ConditionComponent;
