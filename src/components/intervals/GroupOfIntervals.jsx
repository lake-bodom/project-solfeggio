import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const GroupOfIntervals = ({
  group,
  settingsIsOpen,
  activeInterval,
  actionShowTheCorrectInterval,
  actionInverseChosenInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers
}) => {
  const body = group.map(interval => {
    const checkAnswer = interval => {
      actionShowTheCorrectInterval();

      if (activeInterval.name === interval.name) {
        actionIncrementRightAnswers(activeInterval.rusName);
      } else {
        actionIncrementAmountOfAnswers(activeInterval.rusName);
      }
    };

    const funcOnClick = settingsIsOpen
      ? actionInverseChosenInterval
      : checkAnswer;

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
