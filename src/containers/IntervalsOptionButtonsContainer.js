import IntervalsOptionButtons from "../components/intervals/IntervalsOptionButtons";
import { connect } from "react-redux";

import {
  actionSetActiveTypeOfInterval,
  actionSettingsClick,
  actionGetNextInterval
} from "../store/actions/intervalsActions";

import {
  actionStatisticsClearing,
  actionNextButtonClick
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
  actionSettingsClick,
  actionNextButtonClick,
  actionGetNextInterval,
  actionTurnOffVisualization,
  actionStatisticsClearing
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalsOptionButtons);
