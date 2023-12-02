import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContextMenu = ({ list, icon, className }) => {
  const menuElem = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => {
    setOpenMenu(prevState => !prevState);
  };
  const handleClick = action => {
    setOpenMenu(false);
    action();
  };
  const handleClickOut = e => {
    if (e.target.closest(".menuElem") !== menuElem.current) {
      setOpenMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, []);
  return (
    <div ref={menuElem} className="menuElem relative flex justify-center items-center">
      <button onClick={handleToggleMenu}>
        <Icon name={icon} />
      </button>
      {openMenu && (
        <ul
          className={
            "absolute text-black top-6 right-0 p-4 bg-white shadow-lg rounded-lg" + (className ? " " + className : "")
          }
        >
          {list.map((item, index) => {
            if (typeof item.action === "string") {
              return (
                <li key={`action_${index}`}>
                  <Link to={item.action}>{item.text}</Link>
                </li>
              );
            } else {
              return (
                <li key={`action_${index}`}>
                  <button onClick={() => handleClick(item.action)}>{item.text}</button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

ContextMenu.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    })
  ).isRequired,
  icon: PropTypes.string,
  className: PropTypes.string
};

export default ContextMenu;
