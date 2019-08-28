import IntervalsOptionButtons from "../components/intervals/IntervalsOptionButtons";
import { connect } from "react-redux";

import { actionSetActiveTypeOfInterval } from "../store/actions/intervalsActions";

const mapStateToProps = ({ intervals }) => ({
  typesOfInterval: intervals.typesOfInterval,
  sequenceOfNotes: intervals.sequenceOfNotes
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalsOptionButtons);
