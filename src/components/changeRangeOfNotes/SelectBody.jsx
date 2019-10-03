import React from "react";
import OptionFromSelectRanges from "./OptionFromSelectRanges";

import PropTypes from "prop-types";

const SelectBody = ({
  baseArrOfNotes,
  firstBorder,
  secondBorder,
  nameOfSelect,
  minAmountOfNotes
}) => {
  const body = baseArrOfNotes.map(({ fullName, key, index }) => {
    let disabled = false;

    if (nameOfSelect === "firstBorder") {
      if (key > secondBorder.key - minAmountOfNotes) {
        disabled = true;
      }
    } else if (key < firstBorder.key + minAmountOfNotes) {
      disabled = true;
    }

    return (
      <OptionFromSelectRanges
        disabled={disabled}
        fullName={fullName}
        index={index}
        key={key}
      />
    );
  });
  return body;
};

SelectBody.propType = {
  minAmountOfNotes: PropTypes.number.isRequired,
  firstBorder: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }),
  secondBorder: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }),
  nameOfSelect: PropTypes.string.isRequired,
  baseArrOfNotes: PropTypes.arrayOf(PropTypes.object.isRequired),
};


export default SelectBody;