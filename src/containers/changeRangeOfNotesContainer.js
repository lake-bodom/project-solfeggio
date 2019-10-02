import ChangeRangeOfNotes from "../components/changeRangeOfNotes/ChangeRangeOfNotes";
import { connect } from "react-redux";

import {
  actionSetBordersOfRange,
  actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = ({ piano }) => ({
  piano
});

const mapDispatchToProps = {
  actionSetBordersOfRange,
  actionUpdatePianoKeys
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeRangeOfNotes);
