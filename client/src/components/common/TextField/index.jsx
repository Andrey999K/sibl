import React from "react";
import PropTypes from "prop-types";

const TextField = ({ value, onChange, label, name, placeholder, className, type, limit, error }) => {
  const classes =
    "p-2 w-full rounded shadow-inner border-black/20 border-[1px] outline-none" +
    (className ? " " + className : "") +
    (limit ? " pr-8" : "");
  const handleChange = e => {
    const { name, value } = e.target;
    if (limit && value.length > limit) return;
    onChange({ name, value });
  };
  return (
    <label className="flex flex-col gap-2 w-full">
      {!!label && <span>{label}</span>}
      <div className="w-full relative">
        <input
          value={value}
          onChange={handleChange}
          name={name}
          type={type}
          placeholder={placeholder}
          className={classes}
          style={{ borderColor: error ? "red" : "" }}
        />
        {!!limit && <span className="absolute top-[10px] right-3 text-sm text-gray-400">{limit - value.length}</span>}
      </div>
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
  type: PropTypes.string,
  limit: PropTypes.number,
  error: PropTypes.bool
};

export default TextField;
