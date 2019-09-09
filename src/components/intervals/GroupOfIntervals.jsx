import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const GroupOfIntervals = ({
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
    const sequence = [sequenceOfNotes[0].key, sequenceOfNotes[1].key];

    if (right) {
      actionIncrementRightAnswers(activeInterval.rusName);
      actionShowNotesOnThePiano({ type, sequence });
    } else {
      actionIncrementAmountOfAnswers(activeInterval.rusName);
      actionShowNotesOnThePiano({ type, sequence });
    }
  };

  const funcOnClick = settingsIsOpen
    ? actionInverseChosenInterval
    : checkAnswer;

  const body = group.map(interval => {
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
        {interval.rusName}
      </Button>
    );
  });

  return <ButtonsGroup cls="vertical">{body}</ButtonsGroup>;
};

export default GroupOfIntervals;
