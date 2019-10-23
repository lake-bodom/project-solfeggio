import React, { Component } from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import { SelectAmountOfNotes, SelectModes } from "./selectComponents";

import PropTypes from "prop-types";

export default class DictationSettings extends Component {
  state = {
    amountOfNotes: 4,
    defaultModeWrite: false,
    modeWrite: false
  };

  componentDidMount() {
    const { amountOfNotes, defaultModeWrite } = this.props;
    this.setState({
      amountOfNotes,
      defaultModeWrite
    });
  }

  selectAmountOfNotesHandler = e => {
    this.setState({
      amountOfNotes: +e.target.value
    });
  };

  selectModesHandler = e => {
    let defaultModeWrite, modeWrite;
    const value = e.target.value;

    if (value === "true") {
      defaultModeWrite = true;
      modeWrite = true;
    }
    if (value === "false") {
      defaultModeWrite = false;
      modeWrite = false;
    }

    this.setState({
      defaultModeWrite,
      modeWrite
    });
  };

  saveButtonHandler = () => {
    this.props.actionChangeSettings(this.state);
  };

  cancelButtonHandler = () => {
    this.setState({
      amountOfNotes: this.props.amountOfNotes,
      defaultModeWrite: this.props.defaultModeWrite
    });
  };

  render() {
    const {
      settingsButtonHandler,
      amountOfNotes,
      defaultModeWrite
    } = this.props;

    const {
      selectAmountOfNotesHandler,
      selectModesHandler,
      saveButtonHandler,
      cancelButtonHandler
    } = this;
    return (
      <ModalWindow
        close={settingsButtonHandler}
        saveButton={true}
        saveButtonName={"Сохранить"}
        cancelButton={true}
        cancelButtonName={"Отменить"}
        saveButtonHandler={saveButtonHandler}
        cancelButtonHandler={cancelButtonHandler}
      >
        <React.Fragment>
          <h3>Настройки диктанта</h3>
          <h4>Количество нот:</h4>
          <SelectAmountOfNotes
            value={amountOfNotes}
            onChange={selectAmountOfNotesHandler}
          />
          <h4>Режим по умолчанию:</h4>
          <SelectModes value={defaultModeWrite} onChange={selectModesHandler} />
        </React.Fragment>
      </ModalWindow>
    );
  }
}

DictationSettings.propTypes = {
  settingsButtonHandler: PropTypes.func.isRequired,
  actionChangeSettings: PropTypes.func.isRequired,
  amountOfNotes: PropTypes.number.isRequired,
  defaultModeWrite: PropTypes.bool.isRequired
};

