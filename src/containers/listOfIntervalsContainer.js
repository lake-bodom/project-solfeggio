import ListOfIntervals from "../components/intervals/ListOfIntervals";
import { connect } from "react-redux";
import {
  actionInverseChosenInterval,
  actionShowTheCorrectInterval
} from "../store/actions/intervalsActions";

import {
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers
} from "../store/actions/statisticsActions";

import { actionShowNotesOnThePiano } from "../store/actions/pianoActions";

const mapStateToProps = ({ intervals }) => ({
  settingsIsOpen: intervals.settingsIsOpen,
  allIntervals: intervals.allIntervals,
  activeInterval: intervals.activeInterval,
  showAnswer: intervals.showAnswer,
  sequenceOfNotes: intervals.sequenceOfNotes
});

const mapDispatchToProps = {
  actionInverseChosenInterval,
  actionShowTheCorrectInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionShowNotesOnThePiano
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfIntervals);
