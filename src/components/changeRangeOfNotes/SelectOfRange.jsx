import React from "react";
import SelectBody from "./SelectBody";

const SelectOfRange = ({
  nameOfSelect,
  baseArrOfNotes,
  minAmountOfNotes,
  actionSetBordersOfRange,
  firstBorder,
  secondBorder
}) => {
  const selectChangeHandler = (e, field) => {
    let index = +e.target.value;
    const key = baseArrOfNotes[index].key;

    if (field === "firstBorder") {
      if (checkRightAmountOfNotes(secondBorder.key, key)) return;
      firstBorder = { index, key };
    } else {
      if (checkRightAmountOfNotes(firstBorder.key, key)) return;
      secondBorder = { index, key };
    }

    setSelects([firstBorder, secondBorder]);
  };

  const checkRightAmountOfNotes = (key1, key2) => {
    return Math.abs(key1 - key2) < minAmountOfNotes;
  };

  const setSelects = arr => {
    arr.sort((a, b) => a.index - b.index);
    actionSetBordersOfRange(arr);
  };

  const valueOfSelect =
    nameOfSelect === "firstBorder" ? firstBorder.index : secondBorder.index;
  return (
    <select
      value={valueOfSelect}
      onChange={e => {
        selectChangeHandler(e, nameOfSelect);
      }}
    >
      <SelectBody baseArrOfNotes={baseArrOfNotes} />
    </select>
  );
};

export default SelectOfRange;
