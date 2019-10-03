import React from "react";
import PropTypes from "prop-types";

const OptionFromSelectRanges = ({ index, fullName, disabled }) => {
  return (
    <option disabled={disabled} value={index}>
      {fullName}
    </option>
  );
};

OptionFromSelectRanges.propTypes = {
  index: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default OptionFromSelectRanges;
