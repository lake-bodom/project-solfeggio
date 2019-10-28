import React, { Component } from "react";

import ChangeRangeOfNotes from "../../containers/changeRangeOfNotesContainer";
import "./settings.css";
import ClearSettings from "../../containers/clearSettingsContainer";

import PropTypes from "prop-types";
import PlayExampleButton from "./playExampleButton/PlayExampleButton";
import EchoSettings from "../echoSettings/EchoSettings";
import TempoSettings from "../tempoSettings/TempoSettings";
import ChangeInstrument from "../changeInstrument/ChangeInstrument";
import KeyboardSettings from "../keyboardSettings/KeyboardSettings";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class Settings extends Component {
	componentDidMount() {

		const { actionUpdatePianoKeys, actionSetMode } = this.props;
		actionUpdatePianoKeys();
		actionSetMode({ mode: "Настройки", stat: false });
	}

	render() {
		const { actionSetEchoLevel, echoLevel, bpm, actionSetBpmLevel, actionSetInstrumentId, instrumentId, hotKeys, actionKeyboardSetNewHotKeyFlag } = this.props;

		const playExampleComponent = (
			<PlayExampleButton play={this.props.play} duration={this.props.duration} />
		);

		return (
			<ErrorBoundary>
				<div className="settings">
					<ChangeRangeOfNotes />
					<EchoSettings actionSetEchoLevel={actionSetEchoLevel}
						echoLevel={echoLevel}>
						{playExampleComponent}
					</EchoSettings>
					<TempoSettings actionSetBpmLevel={actionSetBpmLevel}
						bpm={bpm}>
						{playExampleComponent}
					</TempoSettings>
					<ChangeInstrument actionSetInstrumentId={actionSetInstrumentId} instrumentId={instrumentId}>
						{playExampleComponent}
					</ChangeInstrument>
					<KeyboardSettings hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} />
					<ClearSettings withTitle={true} />
				</div>
			</ErrorBoundary>
		);
	}
}

Settings.propTypes = {
	actionUpdatePianoKeys: PropTypes.func.isRequired,
	actionSetMode: PropTypes.func.isRequired,
	play: PropTypes.func.isRequired,
	actionSetEchoLevel: PropTypes.func.isRequired,
	actionSetBpmLevel: PropTypes.func.isRequired,
	actionSetInstrumentId: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
	echoLevel: PropTypes.number.isRequired,
	bpm: PropTypes.number.isRequired,
	instrumentId: PropTypes.number.isRequired,
	hotKeys: PropTypes.object.isRequired,
	actionKeyboardSetNewHotKeyFlag: PropTypes.func.isRequired
};
