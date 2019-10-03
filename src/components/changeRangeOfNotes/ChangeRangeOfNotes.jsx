import React from "react";
import SelectOfRange from "./SelectOfRange";

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
      <h3>Изменить диапазон:</h3>
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
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  actionSetBordersOfRange: PropTypes.func.isRequired,
  piano: PropTypes.object
};

export default ChangeRangeOfNotes;
