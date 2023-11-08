import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, url, className }) => {
  const classes = "flex justify-center items-center text-xs md:text-sm py-2 px-4 " +
    `md:py-3 md:px-6 duration-200 bg-my-green-400 hover:bg-my-green-300 text-white font-bold rounded` + (className ? " " + className : "");
  return <Link to={url} className={classes}>{children}</Link>;
};

ButtonLink.defaultProps = {
  link: false,
  disabled: false
};

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  url: (props, propName) => {
    if (props.link === true && !props[propName]) {
      return new Error("Url is required if link is true");
    }
  },
  className: PropTypes.string
};

export default ButtonLink;
