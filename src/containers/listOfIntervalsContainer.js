import ListOfIntervals from "../components/intervals/ListOfIntervals";
import { connect } from "react-redux";
import { actionInverseChosenInterval } from "../store/actions/intervalsActions";

const mapStateToProps = ({ intervals }) => ({
  settingsIsOpen: intervals.settingsIsOpen,
  allIntervals: intervals.allIntervals
});

const mapDispatchToProps = {
  actionInverseChosenInterval
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfIntervals);
