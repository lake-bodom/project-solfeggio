import IntervalsOptionButtons from "../components/intervals/IntervalsOptionButtons";
import { connect } from "react-redux";

import {
  actionSetActiveTypeOfInterval,
  actionSettingsClick
} from "../store/actions/intervalsActions";

const mapStateToProps = ({ intervals }) => ({
  typeOfInterval: intervals.typeOfInterval,
  sequenceOfNotes: intervals.sequenceOfNotes,
  settingsIsOpen: intervals.settingsIsOpen
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval,
  actionSettingsClick
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntervalsOptionButtons);
