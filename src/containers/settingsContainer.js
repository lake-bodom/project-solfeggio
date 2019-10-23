import Settings from "../components/settings/Settings";
import { connect } from "react-redux";

import {
	actionSetMode,
	actionSetEchoLevel,
	actionSetBpmLevel
} from "../store/actions/applicationActions";

import {
	actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = ({ application }) => ({
	duration: application.duration,
	echoLevel: application.echoLevel,
	bpm: application.bpm
});

const mapDispatchToProps = {
	actionSetMode,
	actionUpdatePianoKeys,
	actionSetEchoLevel,
	actionSetBpmLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
