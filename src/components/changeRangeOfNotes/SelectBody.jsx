import React from "react";
import OptionFromSelectRanges from "./OptionFromSelectRanges";

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

export default SelectBody;
