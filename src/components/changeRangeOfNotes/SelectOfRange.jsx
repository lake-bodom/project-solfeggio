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
      firstBorder = { index, key };
    } else {
      secondBorder = { index, key };
    }

    actionSetBordersOfRange([firstBorder, secondBorder]);
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
      <SelectBody
        minAmountOfNotes={minAmountOfNotes}
        firstBorder={firstBorder}
        secondBorder={secondBorder}
        nameOfSelect={nameOfSelect}
        baseArrOfNotes={baseArrOfNotes}
      />
    </select>
  );
};

export default SelectOfRange;
