import React, { Component } from 'react';

import ChangeRangeOfNotes from '../../containers/changeRangeOfNotesContainer';
import './settings.css';
import ClearLocalStorage from '../clearSettings/ClearSettings';

export default class Settings extends Component {
	componentDidMount() {
		this.props.actionUpdatePianoKeys();
		this.props.actionSetMode({ mode: 'Настройки', stat: false });
	}
	render() {
		return (
			<div className="settings">
				<ChangeRangeOfNotes />
				<ClearLocalStorage />
			</div>
		);
	}
}
