import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, disabled, onClick }) => {
  const classes = "flex justify-center items-center text-xs md:text-sm py-2 px-4 " +
    `md:py-3 md:px-6 duration-200 ${disabled ? "bg-my-green-50" : "bg-my-green-400 hover:bg-my-green-300"} text-white font-bold rounded` + (className ? " " + className : "");
  return <button onClick={onClick} className={classes} disabled={disabled}>{children}</button>;
};

Button.defaultProps = {
  link: false,
  disabled: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
