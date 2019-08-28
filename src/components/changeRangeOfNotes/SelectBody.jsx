import React from "react";
import OptionFromSelectRanges from "./OptionFromSelectRanges";

const SelectBody = ({ baseArrOfNotes }) => {
  const body = baseArrOfNotes.map(({ fullName, key, index }) => {
    return (
      <OptionFromSelectRanges fullName={fullName} index={index} key={key} />
    );
  });
  return body;
};

export default SelectBody;
