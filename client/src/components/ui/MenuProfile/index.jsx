import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuProfile = ({ logOut, closeMenu }) => {
  const handleClick = (func) => {
    closeMenu();
    if (func) func();
  };
  return (
    <div
      id="menu-profile"
      className="p-4 rounded-lg bg-white text-black flex flex-col gap-2 items-start absolute top-8 right-0 w-40"
    >
      <Link onClick={() => handleClick()} to="/settings">Настройки</Link>
      <Link onClick={() => handleClick()} to="/my_posts">Мои посты</Link>
      <button onClick={() => handleClick(logOut)}>Выйти</button>
    </div>
  );
};

MenuProfile.propTypes = {
  logOut: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default MenuProfile;
