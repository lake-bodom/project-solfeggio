import App from "../App";
import { connect } from "react-redux";

import {
  actionMenuAction,
  actionWritePlayNote
} from "../store/actions/applicationActions";

const mapStateToProps = ({ application }) => ({
  menuIsOpen: application.menuIsOpen,
  note: application.note,
  needToWriteNote: application.needToWriteNote
});

const mapDispatchToProps = {
  actionMenuAction,
  actionWritePlayNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
