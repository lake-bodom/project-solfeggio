import React, { Component } from "react";
import "./dictation.css";

import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

export default class Dictation extends Component {
  componentDidMount() {
    this.changeMode(null, this.props.dictation.defaultModeWrite);
    this.props.actionGetNewMelody(this.props.sliceArr);
    this.props.actionInitDictation(true);
  }

  componentWillUnmount() {
    this.props.actionInitDictation(false);
  }

  playGuessedMelody = () => {
    const { sequenceOfMelody } = this.props.dictation;
    this.playMelody(sequenceOfMelody);
  };

  playWrittenMelody = () => {
    const arr = [{ key: 21 }, { key: 32 }, undefined, undefined];
    this.playMelody(arr);
  };

  playMelody = sequence => {
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i]) {
        setTimeout(() => {
          this.props.play(sequence[i].key);
        }, 800 * i);
      }
    }
  };

  changeMode = (e, modeWrite) => {
    modeWrite = modeWrite ? modeWrite : !this.props.dictation.modeWrite;
    this.props.actionChangeMode(modeWrite);

    this.props.actionNeedToWriteNote(modeWrite);
  };

  render() {
    const modeWrite = this.props.dictation.modeWrite || false;

    const needToWriteNote = this.props.needToWriteNote;
    return (
      <div>
        <ButtonsGroup cls="horizontal">
          <Button onClick={this.playGuessedMelody}>
            Играть угадываемую мелодию
          </Button>
          <Button onClick={this.playWrittenMelody}>
            Играть написанную мелодию
          </Button>
        </ButtonsGroup>

        <div className="dictation-options-buttons">
          <ButtonsGroup cls="horizontal">
            <Button
              onClick={this.changeMode}
              cls={modeWrite ? "info-outline" : "info active"}
              disabled={modeWrite ? false : true}
            >
              Играть
            </Button>
            <Button
              onClick={this.changeMode}
              cls={modeWrite ? "info active" : "info-outline"}
              disabled={modeWrite ? true : false}
            >
              Писать
            </Button>
          </ButtonsGroup>
          <ButtonsGroup cls="horizontal">
            <Button>Стереть</Button>
            <Button cls="danger">Проверить</Button>
          </ButtonsGroup>
          <Button cls="primary">Настроки</Button>
        </div>
      </div>
    );
  }
}
