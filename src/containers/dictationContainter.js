import { connect } from "react-redux";
import Dictation from "../components/dictation/Dictation";

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
  actionIncrementAmountOfAnswers
} from "../store/actions/statisticsActions";

import {
  actionNeedToWriteNote,
  actionInitDictation,
  actionWritePlayNote
} from "../store/actions/applicationActions";

const mapStateToProps = ({ piano, dictation, application }) => ({
  sliceArr: piano.sliceArr,
  dictation,
  needToWriteNote: application.needToWriteNote,
  playNote: application.playNote
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
  actionClearWrittenMelody
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictation);
