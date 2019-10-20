import FindNote from "../components/findNote/FindNote";
import { connect } from "react-redux";

import { actionSetActiveNote } from "../store/actions/notesActions";

import {
  actionStatisticsClearing,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionHideAnswer
} from "../store/actions/statisticsActions";

import { actionNeedToWriteNote, actionSetMode } from "../store/actions/applicationActions";

import {
  actionShowNotesOnThePiano,
  actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = ({ statistics, notes, piano, application }) => ({
  statistics,
  note: notes.note,
  sliceArr: piano.sliceArr,
  playNote: application.playNote,
  needToWriteNote: application.needToWriteNote
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
  actionUpdatePianoKeys
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindNote);
