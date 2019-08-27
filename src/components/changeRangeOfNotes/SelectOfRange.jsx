import React from "react";
import SelectBody from "./SelectBody";

const SelectOfRange = props => {
  const {
    nameOfSelect,
    valueOfSelect,
    actionSetBordersOfRange,
    piano,
    piano: { baseArrOfNotes, MIN_AMOUNT_OF_NOTES }
  } = props;

  let { firstBorder, secondBorder } = props.piano;

  const selectChangeHandler = (e, field) => {
    let index = +e.target.value;
    const key = baseArrOfNotes[index].key;

    if (field === "first") {
      if (checkRightAmountOfNotes(secondBorder.key, key)) return;
      firstBorder = { index, key };
    } else {
      if (checkRightAmountOfNotes(firstBorder.key, key)) return;
      secondBorder = { index, key };
    }

    setSelects([firstBorder, secondBorder]);
  };

  const checkRightAmountOfNotes = (key1, key2) => {
    return Math.abs(key1 - key2) < MIN_AMOUNT_OF_NOTES;
  };

  const setSelects = arr => {
    arr.sort((a, b) => a.index - b.index);
    actionSetBordersOfRange(arr);
  };

  return (
    <select
      value={valueOfSelect}
      onChange={e => {
        selectChangeHandler(e, nameOfSelect);
      }}
    >
      <SelectBody piano={piano} />
    </select>
  );
};

export default SelectOfRange;
