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

import { actionUpdatePianoKeys } from "../store/actions/pianoActions";

import { actionSetMode, actionKeyboardSetPlayFlag, actionKeyboardSetChangeModeFlag } from "../store/actions/applicationActions";

const mapStateToProps = ({ intervals, piano, application }) => ({
  sliceArr: piano.sliceArr,
  sequenceOfNotes: intervals.sequenceOfNotes,
  nextSequenceOfNotes: intervals.nextSequenceOfNotes,
  typeOfInterval: intervals.typeOfInterval,
  showAnswer: intervals.showAnswer,
  settingsIsOpen: intervals.settingsIsOpen,
  duration: application.duration,
  playFlag: application.playFlag,
  changeModeFlag: application.changeModeFlag
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval,
  actionIntervalsSettingsAction,
  actionNextButtonClick,
  actionGetNextInterval,
  actionStatisticsClearing,
  actionHideAnswer,
  actionSetMode,
  actionUpdatePianoKeys,
  actionKeyboardSetPlayFlag,
  actionKeyboardSetChangeModeFlag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalsOptionButtons);
