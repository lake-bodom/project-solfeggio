import { connect } from "react-redux";
import Dictation from "../components/dictation/Dictation";

import {
  actionGetNewMelody,
  actionChangeMode,
  actionAddNoteToAnswerArray,
  actionPopLastElemFromAnswerArray
} from "../store/actions/dictationActions";
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
  actionPopLastElemFromAnswerArray
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictation);
