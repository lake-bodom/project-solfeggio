import FindNote from "../components/findNote/FindNote";
import { connect } from "react-redux";

import { actionSetActiveNote } from "../store/actions/notesActions";

import {
  actionStatisticsClearing,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionHideAnswer
} from "../store/actions/statisticsActions";

import { actionNeedToWriteNote, actionSetMode, actionKeyboardSetPlayFlag, actionKeyboardSetChangeModeFlag } from "../store/actions/applicationActions";

import {
  actionShowNotesOnThePiano,
  actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = ({ statistics, notes, piano, application }) => ({
  statistics,
  note: notes.note,
  sliceArr: piano.sliceArr,
  playNote: application.playNote,
  needToWriteNote: application.needToWriteNote,
  playFlag: application.playFlag,
  changeModeFlag: application.changeModeFlag
});

const mapDispatchToProps = {
  actionStatisticsClearing,
  actionSetActiveNote,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionNeedToWriteNote,
  actionShowNotesOnThePiano,
  actionHideAnswer,
  actionSetMode,
  actionUpdatePianoKeys,
  actionKeyboardSetPlayFlag,
  actionKeyboardSetChangeModeFlag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindNote);
