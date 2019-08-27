import Intervals from "../components/intervals/Intervals";
import { connect } from "react-redux";

import {
  actionSetActiveTypeOfInterval,
  actionSetSequenceOfNotes
} from "../store/actions/intervalsActions";

const mapStateToProps = state => ({
  intervals: state.intervals,
  sliceArr: state.piano.sliceArr
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval,
  actionSetSequenceOfNotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervals);
