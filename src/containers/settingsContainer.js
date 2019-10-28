import Settings from "../components/settings/Settings";
import { connect } from "react-redux";

import {
	actionSetMode,
	actionSetEchoLevel,
	actionSetBpmLevel,
	actionSetInstrumentId,
	actionKeyboardSetNewHotKeyFlag
} from "../store/actions/applicationActions";

import {
	actionUpdatePianoKeys
} from "../store/actions/pianoActions";

const mapStateToProps = ({ application }) => ({
	duration: application.duration,
	echoLevel: application.echoLevel,
	bpm: application.bpm,
	hotKeys: application.hotKeys,
	instrumentId: application.instrumentId
});

const mapDispatchToProps = {
	actionSetMode,
	actionUpdatePianoKeys,
	actionSetEchoLevel,
	actionSetBpmLevel,
	actionSetInstrumentId,
	actionKeyboardSetNewHotKeyFlag
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
