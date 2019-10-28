import App from "../App";
import { connect } from "react-redux";

import {
  actionMenuAction,
  actionWritePlayNote,
  actionKeyboardSetPlayFlag,
  actionSetModalWindowFlag,
  actionKeyboardSetPlayWrittenMelodyFlag,
  actionKeyboardSetChangeModeFlag,
  actionKeyboardSetDictationClearNoteFlag,
  actionKeyboardSetDictationCheckFlag,
  actionKeyboardSetIntervalButtonFlag,
  actionKeyboardSetNewHotKeyFlag

} from "../store/actions/applicationActions";

const mapStateToProps = ({ application, piano }) => ({
  menuIsOpen: application.menuIsOpen,
  note: application.note,
  needToWriteNote: application.needToWriteNote,
  modeDictation: application.modeDictation,
  echoLevel: application.echoLevel,
  duration: application.duration,
  modalWindowFlag: application.modalWindowFlag,
  playFlag: application.playFlag,
  playWrittenMelodyFlag: application.modalWindowFlag,
  changeModeFlag: application.changeModeFlag,
  instrumentId: application.instrumentId,
  dictationClearNoteFlag: application.dictationClearNoteFlag,
  dictationCheckFlag: application.dictationCheckFlag,
  intervalsKeyboardFlag: application.intervalsKeyboardFlag,
  hotKeys: application.hotKeys,
  sliceArr: piano.sliceArr,
  mapIndex: piano.mapIndex
});

const mapDispatchToProps = {
  actionMenuAction,
  actionWritePlayNote,
  actionKeyboardSetPlayFlag,
  actionSetModalWindowFlag,
  actionKeyboardSetPlayWrittenMelodyFlag,
  actionKeyboardSetChangeModeFlag,
  actionKeyboardSetDictationClearNoteFlag,
  actionKeyboardSetDictationCheckFlag,
  actionKeyboardSetIntervalButtonFlag,
  actionKeyboardSetNewHotKeyFlag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
