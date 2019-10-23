import React, { Component } from "react";

import ChangeRangeOfNotes from "../../containers/changeRangeOfNotesContainer";
import "./settings.css";
import ClearSettings from "../../containers/clearSettingsContainer";

import PropTypes from "prop-types";
import PlayExampleButton from "./playExampleButton/PlayExampleButton";
import EchoSettings from "../echoSettings/EchoSettings";
import TempoSettings from "../tempoSettings/TempoSettings";

export default class Settings extends Component {
	componentDidMount() {

		const { actionUpdatePianoKeys, actionSetMode } = this.props;
		actionUpdatePianoKeys();
		actionSetMode({ mode: "Настройки", stat: false });
	}

	render() {

		const { actionSetEchoLevel, echoLevel, bpm, actionSetBpmLevel } = this.props;

		const playExampleComponent = (
			<PlayExampleButton play={this.props.play} duration={this.props.duration} />
		);

		return (
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

				<ClearSettings />
			</div>
		);
	}
}

Settings.propTypes = {
	actionUpdatePianoKeys: PropTypes.func.isRequired,
	actionSetMode: PropTypes.func.isRequired,
	play: PropTypes.func.isRequired,
	actionSetEchoLevel: PropTypes.func.isRequired,
	actionSetBpmLevel: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired,
	echoLevel: PropTypes.number.isRequired,
	bpm: PropTypes.number.isRequired
};
