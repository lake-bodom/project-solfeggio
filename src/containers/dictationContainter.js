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
  actionSetMode
} from "../store/actions/applicationActions";

const mapStateToProps = ({ piano, dictation, application }) => ({
  sliceArr: piano.sliceArr,
  dictation,
  needToWriteNote: application.needToWriteNote,
  playNote: application.playNote,
  duration: application.duration
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
  actionUpdatePianoKeys
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictation);
