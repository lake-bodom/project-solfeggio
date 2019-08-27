import React from "react";

const OptionFromSelectRanges = ({ index, fullName }) => {
  return <option value={index}>{fullName}</option>;
};

export default OptionFromSelectRanges;
