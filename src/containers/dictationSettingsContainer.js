import DictationSettings from "../components/dictation/DictationSettings";
import { connect } from "react-redux";

import { actionChangeSettings } from "../store/actions/dictationActions";

const mapStateToProps = ({ dictation }) => ({
  amountOfNotes: dictation.amountOfNotes,
  defaultModeWrite: dictation.defaultModeWrite
});

const mapDispatchToProps = { actionChangeSettings };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictationSettings);
