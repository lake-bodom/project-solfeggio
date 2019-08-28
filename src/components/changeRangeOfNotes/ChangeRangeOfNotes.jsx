import React from "react";
import SelectOfRange from "./SelectOfRange";
import "./changeRangeOfNotes.css";

import PropTypes from "prop-types";

import Button from "../button/Button";

const ChangeRangeOfNotes = ({
  actionChangeNotesRange,
  actionSetBordersOfRange,
  piano: { firstBorder, secondBorder, baseArrOfNotes, minAmountOfNotes }
}) => {
  const clickHandler = () => {
    actionChangeNotesRange();
  };

  return (
    <div className="changeRangeOfNotes">
      <SelectOfRange
        firstBorder={firstBorder}
        secondBorder={secondBorder}
        nameOfSelect="firstBorder"
        actionSetBordersOfRange={actionSetBordersOfRange}
        baseArrOfNotes={baseArrOfNotes}
        minAmountOfNotes={minAmountOfNotes}
      />
      <SelectOfRange
        firstBorder={firstBorder}
        secondBorder={secondBorder}
        nameOfSelect="secondBorder"
        actionSetBordersOfRange={actionSetBordersOfRange}
        baseArrOfNotes={baseArrOfNotes}
        minAmountOfNotes={minAmountOfNotes}
      />

      <Button onClick={clickHandler}>Выбрать диапазон</Button>
    </div>
  );
};

ChangeRangeOfNotes.propTypes = {
  actionChangeNotesRange: PropTypes.func.isRequired,
  actionSetBordersOfRange: PropTypes.func.isRequired,
  piano: PropTypes.object
};

export default ChangeRangeOfNotes;
