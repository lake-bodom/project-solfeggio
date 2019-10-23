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
  actionShowNotesOnThePiano
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
      sequenceOfNotes={sequenceOfNotes}
      actionShowTheCorrectInterval={actionShowTheCorrectInterval}
      actionInverseChosenInterval={actionInverseChosenInterval}
      actionIncrementRightAnswers={actionIncrementRightAnswers}
      actionIncrementAmountOfAnswers={actionIncrementAmountOfAnswers}
      actionShowNotesOnThePiano={actionShowNotesOnThePiano}
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
  settingsIsOpen: PropTypes.bool

};

export default ListOfIntervals;

/*

activeInterval: PropTypes.shape({
    name: PropTypes.string,
    rusName: PropTypes.string,
    numberOfSemitones: PropTypes.number,
    chosen: PropTypes.bool
  }).isRequired,

{


  "sequenceOfNotes": [
    50,
    57
  ],
}

*/