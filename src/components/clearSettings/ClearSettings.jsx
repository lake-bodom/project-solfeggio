import React, { Component } from "react";
import Button from "../button/Button";
import ClearSettingsModalBody from "./ClearSettingsModalBody";

import PropTypes from "prop-types";

import "./clearSettings.css";

export default class ClearSettings extends Component {
	state = {
		modalIsOpen: false,
		dataIsClearing: false
	}

	modalOpenerHandler = () => {
		this.setState(prev => ({
			modalIsOpen: !prev.modalIsOpen
		}));
	}

	saveButtonHandler = () => {
		localStorage.clear();
		this.props.setInitialState();
		this.setState(prev => ({
			dataIsClearing: !prev.dataIsClearing
		}), () => {
			setTimeout(() => {
				this.setState(prev => ({
					dataIsClearing: !prev.dataIsClearing
				}));
			}, 3000);
		});
	}

	render() {
		const { modalIsOpen, dataIsClearing } = this.state;
		const { modalOpenerHandler } = this;
		return (
			<div className="clear-settings">
				<h3>Сбросить настройки:</h3>
				<Button onClick={modalOpenerHandler}>
					Сбросить все настройки
				</Button>
				{dataIsClearing ? <span>
					Настройки сброшены
				</span> : null}
				{modalIsOpen ? <ClearSettingsModalBody close={this.modalOpenerHandler} saveButtonHandler={this.saveButtonHandler} /> : null}
			</div>
		);
	}
}

ClearSettings.propTypes = {
	setInitialState: PropTypes.func.isRequired
};