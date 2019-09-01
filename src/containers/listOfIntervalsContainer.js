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

const mapStateToProps = ({ intervals }) => ({
  settingsIsOpen: intervals.settingsIsOpen,
  allIntervals: intervals.allIntervals,
  activeInterval: intervals.activeInterval,
  showAnswer: intervals.showAnswer
});

const mapDispatchToProps = {
  actionInverseChosenInterval,
  actionShowTheCorrectInterval,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfIntervals);
