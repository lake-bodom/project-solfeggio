import ActivateMidi from "../components/activateMidi/ActivateMidi";
import { connect } from "react-redux";

import {
  actionShowNotesOnThePiano,
  actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = ({ piano }) => ({
  sliceArr: piano.sliceArr
});

const mapDispatchToProps = {
  actionShowNotesOnThePiano,
  actionUpdatePianoKeys
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivateMidi);
