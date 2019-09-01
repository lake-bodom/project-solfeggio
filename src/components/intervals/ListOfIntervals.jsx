import React from "react";
import GroupOfIntervals from "./GroupOfIntervals";

import {
  getChosenIntervals,
  createGroupsOfIntervals
} from "../../store/dataOfIntervals";

const ListOfIntervals = ({
  settingsIsOpen,
  allIntervals,
  activeInterval,
  showAnswer,
  actionInverseChosenInterval,
  actionShowTheCorrectInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers
}) => {
  let arr = [];

  if (settingsIsOpen) {
    arr = createGroupsOfIntervals(allIntervals);
  } else {
    arr = createGroupsOfIntervals(getChosenIntervals(allIntervals));
  }

  const body = arr.map(group => (
    <GroupOfIntervals
      group={group}
      key={group[0].name}
      settingsIsOpen={settingsIsOpen}
      activeInterval={activeInterval}
      actionShowTheCorrectInterval={actionShowTheCorrectInterval}
      actionInverseChosenInterval={actionInverseChosenInterval}
      actionIncrementRightAnswers={actionIncrementRightAnswers}
      actionIncrementAmountOfAnswers={actionIncrementAmountOfAnswers}
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

export default ListOfIntervals;
