import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={process.env.PUBLIC_URL} className="pb-4 font-extrabold text-2xl md:text-5xl">
      <span>S</span>
      <span>i</span>
      <span className="text-white">b</span>
      <span className="text-white">l</span>
    </Link>
  );
};

export default Logo;
