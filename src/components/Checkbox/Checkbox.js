import React, {Component} from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label }) => {
  return (
    <div className="d-flex align-items-center checkbox-wrapper checkbox-wrapper--small">
      <input type="checkbox" name="remember" className="checkbox" />
      <span className="checkmark"></span>
      <label>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
};

export default Checkbox;
