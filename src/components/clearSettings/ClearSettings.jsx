import React, { Component } from "react";
import Button from "../button/Button";
import ClearLocalStorageModalBody from "./ClearSettingsModalBody";

export default class ClearLocalStorage extends Component {
	state = {
		modalIsOpen: false
	}

	modalOpenerHandler = () => {
		this.setState(prev => ({
			modalIsOpen: !prev.modalIsOpen
		}));
	}

	render() {
		const { modalIsOpen } = this.state;
		const { modalOpenerHandler } = this;
		return (
			<div className="changeRangeOfNotes">
				<h3>Сбросить настройки:</h3>
				<Button onClick={modalOpenerHandler}>
					Сбросить все настройки
				</Button>
				{modalIsOpen ? <ClearLocalStorageModalBody close={this.modalOpenerHandler} /> : null}
			</div>
		);
	}
}
