import React, { Component } from "react";
import "./dictation.css";

import DictationPlayButtons from "./DictationPlayButtons";
import DictationOptionsButtons from "./DictationOptionsButtons";
import DuctationOutput from "./DuctationOutput";
import DictationSettings from "../../containers/dictationSettingsContainer";

export default class Dictation extends Component {
  state = {
    modalIsOpen: false
  };

  componentDidMount() {
    const { defaultModeWrite } = this.props.dictation;
    this.props.actionWritePlayNote(null, false);

    this.changeMode(null, defaultModeWrite);

    if (this.props.needToWriteNote !== defaultModeWrite) {
      this.props.actionNeedToWriteNote(defaultModeWrite);
    }

    this.setNewMelody();
    this.props.actionInitDictation(true);
    this.props.actionSetMode({ mode: "Музыкальный диктант", stat: true });
    this.props.actionUpdatePianoKeys();
    this.clearAnswers();
    this.props.actionClearWrittenMelody();
  }

  componentWillUnmount() {
    this.props.actionInitDictation(false);
    this.clearAnswers();
    this.props.actionStatisticsClearing();
    this.props.actionClearWrittenMelody();
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

  setNewMelody = () => {
    this.props.actionGetNewMelody(this.props.sliceArr);
  };

  clearAnswers = () => {
    this.props.actionWriteAnswers([]);
  };

  playGuessedMelody = () => {
    const sequence = this.props.dictation.sequenceOfMelody.map(
      elem => elem.key
    );

    this.playMelody(sequence);
  };

  playWrittenMelody = () => {
    const sequence = this.getKeysArrayOfMeloday(
      this.props.dictation.sequenceOfWrittenMelody
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
    const arrKeysArrayOfMeloday = this.getKeysArrayOfMeloday(
      this.props.dictation.sequenceOfMelody
    );

    const arrKeysArrayOfWrittenMeloday = this.getKeysArrayOfMeloday(
      this.props.dictation.sequenceOfWrittenMelody
    );

    if (arrKeysArrayOfMeloday.length === arrKeysArrayOfWrittenMeloday.length) {
      const checkAnswers = this.getArrayOfEqualsOfAnswers(
        arrKeysArrayOfMeloday,
        arrKeysArrayOfWrittenMeloday
      );

      this.changeStat(checkAnswers);
      this.props.actionWriteAnswers(checkAnswers);
    }
  };

  getKeysArrayOfMeloday = sequence => {
    const arr = sequence.map(elem => elem.key);

    return arr;
  };

  getArrayOfEqualsOfAnswers = (arr1, arr2) => {
    const checkAnswers = [];
    for (let i = 0; i < arr1.length; i++) {
      checkAnswers.push(arr1[i] === arr2[i]);
    }

    return checkAnswers;
  };

  changeStat = arr => {
    if (arr.indexOf(false) === -1) {
      this.props.actionIncrementRightAnswers();
    } else {
      this.props.actionIncrementAmountOfAnswers();
    }
  };

  nextButtonHandler = () => {
    this.setNewMelody();

    this.clearAnswers();

    this.props.actionClearWrittenMelody();

    this.props.actionHideAnswer();
  };

  settingsButtonHandler = () => {
    this.setState(prevState => {
      return {
        modalIsOpen: !prevState.modalIsOpen
      };
    });
  };

  render() {
    const modeWrite = this.props.dictation.modeWrite || false;

    const needToWriteNote = this.props.needToWriteNote;

    const {
      amountOfNotes,
      sequenceOfMelody,
      sequenceOfWrittenMelody,
      answerGiven,
      answers
    } = this.props.dictation;

    const { nextButtonHandler, settingsButtonHandler } = this;

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
          sequenceOfWrittenMelody={sequenceOfWrittenMelody}
          amountOfNotes={amountOfNotes}
          answerGiven={answerGiven}
          nextButtonHandler={nextButtonHandler}
          settingsButtonHandler={settingsButtonHandler}
        />
        <DuctationOutput
          amountOfNotes={amountOfNotes}
          needToWriteNote={needToWriteNote}
          sequenceOfMelody={sequenceOfMelody}
          sequenceOfWrittenMelody={sequenceOfWrittenMelody}
          answerGiven={answerGiven}
          answers={answers}
        />

        {this.state.modalIsOpen ? (
          <DictationSettings settingsButtonHandler={settingsButtonHandler} />
        ) : null}
      </div>
    );
  }
}
