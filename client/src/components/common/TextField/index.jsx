import React from "react";
import PropTypes from "prop-types";

const TextField = ({ value, onChange, label, name, placeholder, className, type }) => {
  const classes = "p-2 rounded shadow-inner border-black/20 border-[1px]" + (className ? " " + className : "");
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };
  return (
    <label className="flex flex-col gap-2 w-full">
      {!!label && <span>{label}</span>}
      <input
        value={value}
        onChange={handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className={classes}
      />
    </label>
  );
};

TextField.defaultProps = {
  type: "text"
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string
};

export default TextField;
