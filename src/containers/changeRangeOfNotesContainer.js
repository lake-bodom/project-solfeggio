import ChangeRangeOfNotes from "../components/changeRangeOfNotes/ChangeRangeOfNotes";
import { connect } from "react-redux";

import {
  actionSetBordersOfRange,
  actionChangeNotesRange
} from "../store/actions/pianoActions";

const mapStateToProps = ({ piano }) => ({
  piano
});

const mapDispatchToProps = {
  actionSetBordersOfRange,
  actionChangeNotesRange
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeRangeOfNotes);
