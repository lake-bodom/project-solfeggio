import React from "react";
import GroupOfIntervals from "./GroupOfIntervals";

import {
  getChosenIntervals,
  createGroupsOfIntervals
} from "../../store/dataOfIntervals";

import PropTypes from "prop-types";

const ListOfIntervals = ({
  settingsIsOpen,
  allIntervals,
  activeInterval,
  showAnswer,
  sequenceOfNotes,
  actionInverseChosenInterval,
  actionShowTheCorrectInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionShowNotesOnThePiano,
  intervalsKeyboardFlag,
  actionKeyboardSetIntervalButtonFlag,
  actionSetActiveKeyboardInterval,
  activeKeyboardInterval
}) => {
  let arrayOfGroups = [];
  let sortedIntervals = [];

  if (settingsIsOpen) {
    sortedIntervals = allIntervals;
    arrayOfGroups = createGroupsOfIntervals(sortedIntervals);
  } else {
    sortedIntervals = getChosenIntervals(allIntervals);
    arrayOfGroups = createGroupsOfIntervals(getChosenIntervals(allIntervals));
  }

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

  const intervalClickHandler = settingsIsOpen
    ? actionInverseChosenInterval
    : checkAnswer;

  if (intervalsKeyboardFlag.intervalButtonFlag) {
    const intervalKeyboardActive = sortedIntervals[intervalsKeyboardFlag.interval];

    actionKeyboardSetIntervalButtonFlag(false);
    actionSetActiveKeyboardInterval(intervalKeyboardActive);

    setTimeout(() => {
      intervalClickHandler(intervalKeyboardActive);
    }, 150);

  }

  if (activeKeyboardInterval && activeKeyboardInterval.hasOwnProperty("name")) {
    setTimeout(() => {
      actionSetActiveKeyboardInterval({});
    }, 150);
  }

  const body = arrayOfGroups.map((group, groupIndex) => (
    <GroupOfIntervals
      groupIndex={groupIndex}
      group={group}
      key={group[0].name}
      settingsIsOpen={settingsIsOpen}
      intervalClickHandler={intervalClickHandler}
      activeKeyboardInterval={activeKeyboardInterval}
    />
  ));

  return (
    <div
      className="listOfIntervals"
      style={showAnswer && !settingsIsOpen ? { visibility: "hidden" } : null}
    >
      {body}
    </div>
  );
};

ListOfIntervals.propTypes = {
  actionInverseChosenInterval: PropTypes.func.isRequired,
  actionShowTheCorrectInterval: PropTypes.func.isRequired,
  actionIncrementRightAnswers: PropTypes.func.isRequired,
  actionIncrementAmountOfAnswers: PropTypes.func.isRequired,
  actionShowNotesOnThePiano: PropTypes.func.isRequired,
  allIntervals: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeInterval: PropTypes.object,
  showAnswer: PropTypes.bool,
  sequenceOfNotes: PropTypes.arrayOf(PropTypes.number),
  settingsIsOpen: PropTypes.bool,
  intervalsKeyboardFlag: PropTypes.shape({
    intervalButtonFlag: PropTypes.bool.isRequired,
    interval: PropTypes.number.isRequired
  }).isRequired,
  actionKeyboardSetIntervalButtonFlag: PropTypes.func.isRequired,
  activeKeyboardInterval: PropTypes.object,
  actionSetActiveKeyboardInterval: PropTypes.func.isRequired
};

export default ListOfIntervals;
