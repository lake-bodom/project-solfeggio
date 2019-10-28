import React, { Component } from "react";
import Button from "../button/Button";
import ClearSettingsModalBody from "./ClearSettingsModalBody";

import PropTypes from "prop-types";

import "./clearSettings.css";

export default class ClearSettings extends Component {


	modalOpenerHandler = () => {
		this.props.actionSetModalWindowFlag(true);
	}

	modalCloserHandler = () => {
		this.props.actionSetModalWindowFlag(false);
	}

	saveButtonHandler = () => {
		localStorage.clear();
		this.props.setInitialState();
		this.props.actionSetDataClearingFlag(true);
		setTimeout(() => {
			this.props.actionSetDataClearingFlag(false);
		}, 1000);
	}

	render() {
		const { modalOpenerHandler } = this;
		const { modalWindowFlag, dataIsClearing, withTitle } = this.props;

		return (
			<div className="clear-settings">
				{withTitle ? <h3>Сбросить настройки:</h3> : null}
				<Button onClick={modalOpenerHandler}>
					Сбросить все настройки
				</Button>
				{dataIsClearing ? <span>
					Настройки сброшены
				</span> : null}
				{modalWindowFlag ? <ClearSettingsModalBody close={this.modalCloserHandler} saveButtonHandler={this.saveButtonHandler} /> : null}
			</div>
		);
	}
}

ClearSettings.propTypes = {
	actionSetDataClearingFlag: PropTypes.func.isRequired,
	setInitialState: PropTypes.func.isRequired,
	actionSetModalWindowFlag: PropTypes.func.isRequired,
	modalWindowFlag: PropTypes.bool,
	dataIsClearing: PropTypes.bool,
	withTitle: PropTypes.bool.isRequired
};