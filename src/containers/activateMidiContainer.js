import ActivateMidi from "../components/activateMidi/ActivateMidi";
import { connect } from "react-redux";

import {
  actionShowNotesOnThePiano,
  actionTurnOffVisualization
} from "../store/actions/pianoActions";

const mapStateToProps = ({ piano }) => ({
  sliceArr: piano.sliceArr
});

const mapDispatchToProps = {
  actionShowNotesOnThePiano,
  actionTurnOffVisualization
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivateMidi);
