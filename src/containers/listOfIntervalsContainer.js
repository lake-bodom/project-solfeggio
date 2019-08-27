import ListOfIntervals from "../components/intervals/ListOfIntervals";
import { connect } from "react-redux";

const mapStateToProps = ({ intervals }) => ({
  groupsOfIntervals: intervals.groupsOfIntervals
});

export default connect(mapStateToProps)(ListOfIntervals);
