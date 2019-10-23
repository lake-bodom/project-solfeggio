import React, { Component } from "react";
import Button from "../button/Button";

import PropTypes from "prop-types";

export default class ActivateMidi extends Component {
  state = { status: "" };

  onMIDIOnStateChange = event => {
    this.setState({
      status:
        event.port.manufacturer + " " + event.port.name + " " + event.port.state
    });
  };

  requestMIDIAccessSuccess = midi => {
    var inputs = midi.inputs.values();
    for (
      var input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      input.value.onmidimessage = this.midiOnMIDImessage;
    }
    midi.onstatechange = this.onMIDIOnStateChange;
  };

  requestMIDIAccessFailure = () => {
    this.setState({ status: "MIDI Access Failure" });
  };

  midiOnMIDImessage = event => {
    const keydown = 144;
    const keyup = 128;
    const velocity = event.data[2];

    const eventKey = event.data[0];
    const note = event.data[1];

    const { sliceArr } = this.props;
    if (note >= sliceArr[0].key && note <= sliceArr[sliceArr.length - 1].key) {
      const options = { sequence: [note], type: "active" };

      if (eventKey === keydown && velocity !== 0) {
        this.props.actionShowNotesOnThePiano(options);
        this.props.play(note);
      } else if (eventKey === keyup || velocity === 0) {
        this.props.actionUpdatePianoKeys();
      }
    }
  };

  startListening = () => {
    this.setState({ status: "waiting" });
    if (navigator.requestMIDIAccess) {
      navigator
        .requestMIDIAccess({ sysex: true })
        .then(this.requestMIDIAccessSuccess, this.requestMIDIAccessFailure);
    } else {
      this.setState({ status: "Нет доступа к миди-устройству" });
    }
  };

  render() {
    return (
      <div className="activate-midi">
        <Button cls="primary" onClick={this.startListening}>
          Включить MIDI клавиатуру
        </Button>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          <b>Статус midi:</b>{" "}
          {this.state.status ? this.state.status : "отключена"}
        </p>
      </div>
    );
  }
}

ActivateMidi.propTypes = {
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  play: PropTypes.func.isRequired,
  actionShowNotesOnThePiano: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired
};
