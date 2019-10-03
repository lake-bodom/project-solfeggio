import React from "react";
import SelectBody from "./SelectBody";

import Select from "../select/Select";

import PropTypes from "prop-types";

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
    <Select
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
    </Select>
  );
};

SelectOfRange.propTypes = {
  firstBorder: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }),
  secondBorder: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired
  }),
  nameOfSelect: PropTypes.string.isRequired,
  minAmountOfNotes: PropTypes.number.isRequired,
  baseArrOfNotes: PropTypes.arrayOf(PropTypes.object.isRequired),
  actionSetBordersOfRange: PropTypes.func.isRequired
};

export default SelectOfRange;
