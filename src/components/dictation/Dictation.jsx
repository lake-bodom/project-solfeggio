import React, { Component } from "react";
import "./dictation.css";

import DictationPlayButtons from "./DictationPlayButtons";
import DictationOptionsButtons from "./DictationOptionsButtons";

export default class Dictation extends Component {
  componentDidMount() {
    const { defaultModeWrite } = this.props.dictation;
    this.props.actionWritePlayNote(null, false);

    this.changeMode(null, defaultModeWrite);

    if (this.props.needToWriteNote !== defaultModeWrite) {
      console.log(1);
      this.props.actionNeedToWriteNote(defaultModeWrite);
    }

    this.props.actionGetNewMelody(this.props.sliceArr);
    this.props.actionInitDictation(true);
  }

  componentWillUnmount() {
    this.props.actionInitDictation(false);
  }

  componentDidUpdate(prevState) {
    const { sequenceOfWrittenMelody } = this.props.dictation;
    const { amountOfNotes } = this.props.dictation;
    const { playNote } = this.props;

    if (sequenceOfWrittenMelody.length < amountOfNotes && playNote) {
      if (
        (prevState.playNote && playNote.id !== prevState.playNote.id) ||
        (prevState.playNote === null && playNote !== null)
      ) {
        this.props.actionAddNoteToAnswerArray(playNote);
      }
    }
  }

  playGuessedMelody = () => {
    const sequence = this.props.dictation.sequenceOfMelody.map(
      elem => elem.key
    );

    this.playMelody(sequence);
  };

  playWrittenMelody = () => {
    const sequence = this.props.dictation.sequenceOfWrittenMelody.map(
      elem => elem.note
    );

    this.playMelody(sequence);
  };

  playMelody = sequence => {
    const onlyPlay = true;
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i]) {
        setTimeout(() => {
          this.props.play(sequence[i], onlyPlay);
        }, 800 * i);
      }
    }
  };

  changeMode = (e, modeWrite) => {
    modeWrite =
      typeof modeWrite === "boolean"
        ? modeWrite
        : !this.props.dictation.modeWrite;

    this.props.actionChangeMode(modeWrite);

    this.props.actionNeedToWriteNote(modeWrite);
  };

  clearButtonHandler = () => {
    if (this.props.dictation.sequenceOfWrittenMelody.length > 0) {
      this.props.actionPopLastElemFromAnswerArray();
    }
  };

  checkAnswerHandler = () => {
    const arrayOfMelody = this.props.dictation.sequenceOfMelody.map(
      elem => elem.key
    );

    const arrayOfAnswer = this.props.dictation.sequenceOfWrittenMelody.map(
      elem => elem.note
    );

    let hits = [];

    let right = false;

    for (let i = 0; i < arrayOfMelody.length; i++) {
      if (arrayOfMelody[i] === arrayOfAnswer[i]) {
        hits.push(true);
      } else {
        hits.push(false);
      }
    }

    if (hits.indexOf(false) === -1) {
      right = true;
    }

    console.log(hits);
  };

  render() {
    const modeWrite = this.props.dictation.modeWrite || false;

    const needToWriteNote = this.props.needToWriteNote;

    return (
      <div>
        <DictationPlayButtons
          playGuessedMelody={this.playGuessedMelody}
          playWrittenMelody={this.playWrittenMelody}
        />
        <DictationOptionsButtons
          modeWrite={modeWrite}
          changeMode={this.changeMode}
          clearButtonHandler={this.clearButtonHandler}
          checkAnswerHandler={this.checkAnswerHandler}
        />
        <p>
          {needToWriteNote
            ? this.props.dictation.sequenceOfWrittenMelody.reduce(
                (output, elem) => {
                  return output + " " + elem.note;
                },
                ""
              )
            : null}
        </p>
      </div>
    );
  }
}
