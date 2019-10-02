import React from "react";
import SelectOfRange from "./SelectOfRange";
import "./changeRangeOfNotes.css";

import PropTypes from "prop-types";

import Button from "../button/Button";

const ChangeRangeOfNotes = ({
  actionUpdatePianoKeys,
  actionSetBordersOfRange,
  piano: { firstBorder, secondBorder, baseArrOfNotes, minAmountOfNotes }
}) => {
  const clickHandler = () => {
    actionUpdatePianoKeys();
  };

  return (
    <div className="changeRangeOfNotes">
      <SelectOfRange
        firstBorder={firstBorder}
        secondBorder={secondBorder}
        nameOfSelect="firstBorder"
        actionSetBordersOfRange={actionSetBordersOfRange}
        actionUpdatePianoKeys={actionUpdatePianoKeys}
        baseArrOfNotes={baseArrOfNotes}
        minAmountOfNotes={minAmountOfNotes}
      />
      <SelectOfRange
        firstBorder={firstBorder}
        secondBorder={secondBorder}
        nameOfSelect="secondBorder"
        actionSetBordersOfRange={actionSetBordersOfRange}
        actionUpdatePianoKeys={actionUpdatePianoKeys}
        baseArrOfNotes={baseArrOfNotes}
        minAmountOfNotes={minAmountOfNotes}
      />

      <Button onClick={clickHandler}>Выбрать диапазон</Button>
    </div>
  );
};

ChangeRangeOfNotes.propTypes = {
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  actionSetBordersOfRange: PropTypes.func.isRequired,
  piano: PropTypes.object
};

export default ChangeRangeOfNotes;
