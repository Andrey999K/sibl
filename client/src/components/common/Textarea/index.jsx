import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ value, onChange, label, name, placeholder, className }) => {
  const classes = "p-2 rounded shadow-inner border-black/20 border-[1px]" + (className ? " " + className : "");
  const handlerChange = ({ target }) => {
    onChange({ name, value: target.value });
  };
  return (
    <label className="flex flex-col gap-2 w-full">
      <span>{label}</span>
      <textarea
        value={value}
        onChange={handlerChange}
        name={name}
        placeholder={placeholder}
        className={classes}
        rows={8}
      >{value}</textarea>
    </label>
  );
};

Textarea.defaultProps = {
  rows: 8
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  rows: PropTypes.number
};

export default Textarea;
