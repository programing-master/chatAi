import PropTypes from "prop-types";
import React from "react";

const Button = ({
  children,
  classes = "",
  variant = "filled",
  color = "primary",
  ...rest
}) => {
  return (
    <button className={`btn ${variant} ${color} ${classes} w-full`} {...rest}>
      {children}
      <div className="state-layer"></div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
