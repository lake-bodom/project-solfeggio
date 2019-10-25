import React from "react";
import PropTypes from "prop-types";

const OptionFromSelect = ({ index, fullName, disabled }) => {
  return (
    <option disabled={disabled} value={index}>
      {fullName}
    </option>
  );
};

OptionFromSelect.propTypes = {
  index: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

OptionFromSelect.defaultProps = {
  disabled: false
};

export default OptionFromSelect;
