import ListOfIntervals from "../components/intervals/ListOfIntervals";
import { connect } from "react-redux";
import {
  actionInverseChosenInterval,
  actionShowTheCorrectInterval,
  actionSetActiveKeyboardInterval
} from "../store/actions/intervalsActions";

import {
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers
} from "../store/actions/statisticsActions";

import {
  actionKeyboardSetIntervalButtonFlag
} from "../store/actions/applicationActions";

import { actionShowNotesOnThePiano } from "../store/actions/pianoActions";

const mapStateToProps = ({ intervals, application }) => ({
  settingsIsOpen: intervals.settingsIsOpen,
  allIntervals: intervals.allIntervals,
  activeInterval: intervals.activeInterval,
  showAnswer: intervals.showAnswer,
  sequenceOfNotes: intervals.sequenceOfNotes,
  activeKeyboardInterval: intervals.activeKeyboardInterval,
  intervalsKeyboardFlag: application.intervalsKeyboardFlag
});

const mapDispatchToProps = {
  actionInverseChosenInterval,
  actionShowTheCorrectInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionShowNotesOnThePiano,
  actionKeyboardSetIntervalButtonFlag,
  actionSetActiveKeyboardInterval
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfIntervals);
