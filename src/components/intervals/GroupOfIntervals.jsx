import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const GroupOfIntervals = ({
  groupIndex,
  group,
  settingsIsOpen,
  activeInterval,
  sequenceOfNotes,
  actionShowTheCorrectInterval,
  actionInverseChosenInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionShowNotesOnThePiano
}) => {
  const checkAnswer = interval => {
    actionShowTheCorrectInterval();
    const right = activeInterval.name === interval.name;
    const type = right ? "right" : "wrong";

    if (right) {
      actionIncrementRightAnswers(activeInterval.rusName);
      actionShowNotesOnThePiano({ type, sequence: sequenceOfNotes });
    } else {
      actionIncrementAmountOfAnswers(activeInterval.rusName);
      actionShowNotesOnThePiano({ type, sequence: sequenceOfNotes });
    }
  };

  const funcOnClick = settingsIsOpen
    ? actionInverseChosenInterval
    : checkAnswer;

  const body = group.map((interval, index) => {
    return (
      <Button
        key={interval.name}
        onClick={() => {
          funcOnClick(interval);
        }}
      >
        {settingsIsOpen ? (
          <span className="check">
            {interval.chosen
              ? String.fromCharCode(10003)
              : String.fromCharCode(215)}
          </span>
        ) : null}
        <b>{groupIndex * 4 + index + 1})&nbsp;</b>{interval.rusName}
      </Button>
    );
  });

  GroupOfIntervals.propTypes = {
    groupIndex: PropTypes.number.isRequired,
    settingsIsOpen: PropTypes.bool,
    group: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeInterval: PropTypes.shape({
      name: PropTypes.string.isRequired,
      rusName: PropTypes.string.isRequired,
      numberOfSemitones: PropTypes.number.isRequired,
      chosen: PropTypes.bool.isRequired
    }).isRequired,
    sequenceOfNotes: PropTypes.arrayOf(PropTypes.number).isRequired,
    actionShowTheCorrectInterval: PropTypes.func.isRequired,
    actionInverseChosenInterval: PropTypes.func.isRequired,
    actionIncrementRightAnswers: PropTypes.func.isRequired,
    actionIncrementAmountOfAnswers: PropTypes.func.isRequired,
    actionShowNotesOnThePiano: PropTypes.func.isRequired
  };

  return <ButtonsGroup cls="vertical">{body}</ButtonsGroup>;
};

export default GroupOfIntervals;

