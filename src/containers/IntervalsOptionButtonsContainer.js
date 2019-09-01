import IntervalsOptionButtons from "../components/intervals/IntervalsOptionButtons";
import { connect } from "react-redux";

import {
  actionSetActiveTypeOfInterval,
  actionSettingsClick,
  actionGetNextInterval
} from "../store/actions/intervalsActions";

import { actionNextButtonClick } from "../store/actions/statisticsActions";

const mapStateToProps = ({ intervals, piano }) => ({
  sliceArr: piano.sliceArr,
  sequenceOfNotes: intervals.sequenceOfNotes,
  typeOfInterval: intervals.typeOfInterval,
  showAnswer: intervals.showAnswer,
  settingsIsOpen: intervals.settingsIsOpen
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval,
  actionSettingsClick,
  actionNextButtonClick,
  actionGetNextInterval
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalsOptionButtons);
