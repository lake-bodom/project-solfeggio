import IntervalsOptionButtons from "../components/intervals/IntervalsOptionButtons";
import { connect } from "react-redux";

import {
  actionSetActiveTypeOfInterval,
  actionIntervalsSettingsAction,
  actionGetNextInterval
} from "../store/actions/intervalsActions";

import {
  actionStatisticsClearing,
  actionNextButtonClick,
  actionHideAnswer
} from "../store/actions/statisticsActions";

import { actionTurnOffVisualization } from "../store/actions/pianoActions";

const mapStateToProps = ({ intervals, piano }) => ({
  sliceArr: piano.sliceArr,
  sequenceOfNotes: intervals.sequenceOfNotes,
  nextSequenceOfNotes: intervals.nextSequenceOfNotes,
  typeOfInterval: intervals.typeOfInterval,
  showAnswer: intervals.showAnswer,
  settingsIsOpen: intervals.settingsIsOpen
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval,
  actionIntervalsSettingsAction,
  actionNextButtonClick,
  actionGetNextInterval,
  actionTurnOffVisualization,
  actionStatisticsClearing,
  actionHideAnswer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalsOptionButtons);
