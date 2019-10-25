import Dictation from "../components/dictation/Dictation";
import { connect } from "react-redux";

import {
  actionUpdatePianoKeys
} from "../store/actions/pianoActions";

import {
  actionGetNewMelody,
  actionChangeMode,
  actionAddNoteToAnswerArray,
  actionPopLastElemFromAnswerArray,
  actionWriteAnswers,
  actionClearWrittenMelody
} from "../store/actions/dictationActions";

import {
  actionStatisticsClearing,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionHideAnswer
} from "../store/actions/statisticsActions";

import {
  actionNeedToWriteNote,
  actionInitDictation,
  actionWritePlayNote,
  actionSetMode,
  actionSetModalWindowFlag,
  actionKeyboardSetPlayFlag,
  actionKeyboardSetPlayWrittenMelodyFlag,
  actionKeyboardSetChangeModeFlag,
  actionKeyboardSetDictationClearNoteFlag,
  actionKeyboardSetDictationCheckFlag
} from "../store/actions/applicationActions";

const mapStateToProps = ({ piano, dictation, application }) => ({
  sliceArr: piano.sliceArr,
  dictation,
  needToWriteNote: application.needToWriteNote,
  playNote: application.playNote,
  duration: application.duration,
  modalWindowFlag: application.modalWindowFlag,
  playFlag: application.playFlag,
  playWrittenMelodyFlag: application.playWrittenMelodyFlag,
  changeModeFlag: application.changeModeFlag,
  dictationClearNoteFlag: application.dictationClearNoteFlag,
  dictationCheckFlag: application.dictationCheckFlag
});

const mapDispatchToProps = {
  actionGetNewMelody,
  actionChangeMode,
  actionNeedToWriteNote,
  actionInitDictation,
  actionAddNoteToAnswerArray,
  actionWritePlayNote,
  actionPopLastElemFromAnswerArray,
  actionWriteAnswers,
  actionStatisticsClearing,
  actionIncrementRightAnswers,
  actionIncrementAmountOfAnswers,
  actionClearWrittenMelody,
  actionHideAnswer,
  actionSetMode,
  actionUpdatePianoKeys,
  actionSetModalWindowFlag,
  actionKeyboardSetPlayFlag,
  actionKeyboardSetPlayWrittenMelodyFlag,
  actionKeyboardSetChangeModeFlag,
  actionKeyboardSetDictationClearNoteFlag,
  actionKeyboardSetDictationCheckFlag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictation);


