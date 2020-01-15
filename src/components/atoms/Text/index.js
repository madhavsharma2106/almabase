import React from "react";
import "./style.scss";
import classnames from "classnames";

export const TextVariant = {
  HEADING: "text-heading",
  DESCRIPTION: "text-description",
  HIGHLIGHTED: "text-highlighted",
  REGULAR: "text-regular"
};

function Text(props) {
  let { variant, style, children, onClick, className, color } = props;
  style = { ...style, color };
  const classes = classnames(className, variant, "text");
  return (
    <span onClick={onClick} style={style} variant={variant} className={classes}>
      {children}
    </span>
  );
}

Text.defaultProps = {
  onClick: () => {},
  className: "",
  variant: TextVariant.REGULAR,
  style: {}
};

export default Text;
