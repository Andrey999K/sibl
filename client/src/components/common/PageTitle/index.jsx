import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PageTitle = ({ children }) => {
  useEffect(() => {
    if (typeof children === "string") document.title = `Sibl | ${children}`;
  }, []);
  return <h2 className="font-bold text-4xl mb-10">{children}</h2>;
};

PageTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
};

export default PageTitle;
