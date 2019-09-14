import React from "react";

const OptionFromSelectRanges = ({ index, fullName, disabled }) => {
  return (
    <option disabled={disabled} value={index}>
      {fullName}
    </option>
  );
};

export default OptionFromSelectRanges;
