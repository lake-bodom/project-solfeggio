import App from "../App";
import { connect } from "react-redux";

import {
  actionMenuAction,
  actionWritePlayNote
} from "../store/actions/applicationActions";

const mapStateToProps = ({ application, piano }) => ({
  menuIsOpen: application.menuIsOpen,
  note: application.note,
  needToWriteNote: application.needToWriteNote,
  modeDictation: application.modeDictation,
  echoLevel: application.echoLevel,
  duration: application.duration,
  sliceArr: piano.sliceArr,
  mapIndex: piano.mapIndex
});

const mapDispatchToProps = {
  actionMenuAction,
  actionWritePlayNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
