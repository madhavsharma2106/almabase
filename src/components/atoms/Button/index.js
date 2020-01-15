import React from "react";
import "./style.scss";
import classnames from "classnames";

export const ButtonVariant = {
  PRIMARY: "primary",
  SECONDARY: "secondary"
};

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit"
};

function Button(props) {
  const { type, onClick, children, style, variant, className } = props;
  const classes = classnames(className, "button", variant);

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      variant={variant}
      className={classes}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  className: "",
  variant: ButtonVariant.PRIMARY,
  type: ButtonType.BUTTON,
  style: {}
};

export default Button;
