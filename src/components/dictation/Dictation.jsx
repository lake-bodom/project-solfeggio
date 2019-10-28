import React, { Component } from "react";
import "./dictation.css";

import DictationPlayButtons from "./DictationPlayButtons";
import DictationOptionsButtons from "./DictationOptionsButtons";
import DuctationOutput from "./DictationOutput";
import DictationSettings from "../../containers/dictationSettingsContainer";

import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class Dictation extends Component {
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
    this.props.actionClearWrittenMelody();
    this.clearAnswers();

    if (this.props.playFlag) {
      this.props.actionKeyboardSetPlayFlag(false);
    }
    if (this.props.playWrittenMelodyFlag) {
      this.props.actionKeyboardSetPlayWrittenMelodyFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
    if (this.props.modalWindowFlag) {
      this.props.actionSetModalWindowFlag(false);
    }
    if (this.props.dictationClearNoteFlag) {
      this.props.actionSetModalWindowFlag(false);
    }
    if (this.props.dictationCheckFlag) {
      this.props.actionKeyboardSetDictationCheckFlag(false);
    }
  }

  componentWillUnmount() {
    this.props.actionInitDictation(false);
    this.clearAnswers();
    this.props.actionStatisticsClearing();
    this.props.actionClearWrittenMelody();

    if (this.props.modalWindowFlag) {
      this.props.actionSetModalWindowFlag(false);
    }
    if (this.props.playFlag) {
      this.props.actionKeyboardSetPlayFlag(false);
    }
    if (this.props.playWrittenMelodyFlag) {
      this.props.actionKeyboardSetPlayWrittenMelodyFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
    if (this.props.dictationClearNoteFlag) {
      this.props.actionSetModalWindowFlag(false);
    }
    if (this.props.dictationCheckFlag) {
      this.props.actionKeyboardSetDictationCheckFlag(false);
    }
  }

  componentDidUpdate(prevState) {
    const { sequenceOfWrittenMelody, amountOfNotes, answerGiven, readyToCheck } = this.props.dictation;
    const { playNote, playFlag, actionKeyboardSetPlayFlag, playWrittenMelodyFlag, actionKeyboardSetPlayWrittenMelodyFlag, changeModeFlag, dictationClearNoteFlag, actionKeyboardSetDictationClearNoteFlag, dictationCheckFlag,
      actionKeyboardSetDictationCheckFlag } = this.props;

    if (prevState.dictation.amountOfNotes !== amountOfNotes) {
      this.setNewMelody();
    }

    if (sequenceOfWrittenMelody.length < amountOfNotes && playNote) {
      if (
        (prevState.playNote && playNote.id !== prevState.playNote.id) ||
        (prevState.playNote === null && playNote !== null)
      ) {
        this.props.actionAddNoteToAnswerArray(playNote);
      }
    }

    if (playFlag) {
      this.playGuessedMelody();
      setTimeout(() => {
        actionKeyboardSetPlayFlag(false);
      }, 300);
    }

    if (playWrittenMelodyFlag) {
      this.playWrittenMelody();
      setTimeout(() => {
        actionKeyboardSetPlayWrittenMelodyFlag(false);
      }, 300);
    }

    if (changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
      this.nextPlayButtonHandler();
    }

    if (dictationClearNoteFlag) {
      this.clearButtonHandler();
      setTimeout(() => {
        actionKeyboardSetDictationClearNoteFlag(false);
      }, 300);
    }

    if (dictationCheckFlag) {
      actionKeyboardSetDictationCheckFlag(false);
      if (dictationCheckFlag && readyToCheck && !answerGiven) {
        this.checkAnswerHandler();
        setTimeout(() => {
        }, 300);
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
        }, this.props.duration * 1000 * i);
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
      const checkAnswers = this.getArrayOfEqualsOfAnswers(arrKeysArrayOfMeloday
        , arrKeysArrayOfWrittenMeloday);

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
    this.props.actionSetModalWindowFlag(!this.props.modalWindowFlag);
  };

  nextPlayButtonHandler = () => {
    this.changeMode();
    if (this.props.dictation.answerGiven) {
      this.nextButtonHandler();
    }
  };

  render() {
    const modeWrite = this.props.dictation.modeWrite || false;

    const needToWriteNote = this.props.needToWriteNote;

    const {
      amountOfNotes,
      sequenceOfMelody,
      sequenceOfWrittenMelody,
      answerGiven,
      answers,
      readyToCheck
    } = this.props.dictation;

    const { playFlag, playWrittenMelodyFlag, dictationClearNoteFlag } = this.props;

    const { nextPlayButtonHandler, settingsButtonHandler } = this;

    return (
      <ErrorBoundary>
        <div>
          <DictationPlayButtons
            playGuessedMelody={this.playGuessedMelody}
            playWrittenMelody={this.playWrittenMelody}
            playFlag={playFlag}
            playWrittenMelodyFlag={playWrittenMelodyFlag}
          />
          <DictationOptionsButtons
            modeWrite={modeWrite}
            changeMode={this.changeMode}
            clearButtonHandler={this.clearButtonHandler}
            checkAnswerHandler={this.checkAnswerHandler}
            sequenceOfWrittenMelody={sequenceOfWrittenMelody}
            amountOfNotes={amountOfNotes}
            answerGiven={answerGiven}
            nextPlayButtonHandler={nextPlayButtonHandler}
            settingsButtonHandler={settingsButtonHandler}
            dictationClearNoteFlag={dictationClearNoteFlag}
            readyToCheck={readyToCheck}
          />
          <DuctationOutput
            amountOfNotes={amountOfNotes}
            needToWriteNote={needToWriteNote}
            sequenceOfMelody={sequenceOfMelody}
            sequenceOfWrittenMelody={sequenceOfWrittenMelody}
            answerGiven={answerGiven}
            answers={answers}
          />

          {this.props.modalWindowFlag ? (
            <DictationSettings settingsButtonHandler={settingsButtonHandler} />
          ) : null}
        </div>
      </ErrorBoundary>
    );
  }
}

Dictation.propTypes = {
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  play: PropTypes.func.isRequired,
  needToWriteNote: PropTypes.bool.isRequired,
  playNote: PropTypes.object,
  actionGetNewMelody: PropTypes.func.isRequired,
  actionChangeMode: PropTypes.func.isRequired,
  actionNeedToWriteNote: PropTypes.func.isRequired,
  actionInitDictation: PropTypes.func.isRequired,
  actionAddNoteToAnswerArray: PropTypes.func.isRequired,
  actionWritePlayNote: PropTypes.func.isRequired,
  actionPopLastElemFromAnswerArray: PropTypes.func.isRequired,
  actionWriteAnswers: PropTypes.func.isRequired,
  actionStatisticsClearing: PropTypes.func.isRequired,
  actionIncrementRightAnswers: PropTypes.func.isRequired,
  actionIncrementAmountOfAnswers: PropTypes.func.isRequired,
  actionClearWrittenMelody: PropTypes.func.isRequired,
  actionHideAnswer: PropTypes.func.isRequired,
  actionSetMode: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  dictation: PropTypes.shape({
    amountOfNotes: PropTypes.number.isRequired,
    sequenceOfMelody: PropTypes.arrayOf(PropTypes.object).isRequired,
    sequenceOfWrittenMelody: PropTypes.arrayOf(PropTypes.object).isRequired,
    defaultModeWrite: PropTypes.bool.isRequired,
    answers: PropTypes.array.isRequired,
    answerGiven: PropTypes.bool.isRequired,
    modeWrite: PropTypes.bool,
    readyToCheck: PropTypes.bool
  }).isRequired,
  duration: PropTypes.number.isRequired,
  actionSetModalWindowFlag: PropTypes.func.isRequired,
  modalWindowFlag: PropTypes.bool,
  actionKeyboardSetPlayFlag: PropTypes.func.isRequired,
  playFlag: PropTypes.bool.isRequired,
  actionKeyboardSetPlayWrittenMelodyFlag: PropTypes.func.isRequired,
  playWrittenMelodyFlag: PropTypes.bool.isRequired,
  actionKeyboardSetChangeModeFlag: PropTypes.func.isRequired,
  changeModeFlag: PropTypes.bool.isRequired,
  dictationClearNoteFlag: PropTypes.bool.isRequired,
  actionKeyboardSetDictationClearNoteFlag: PropTypes.func.isRequired,
  actionKeyboardSetDictationCheckFlag: PropTypes.func.isRequired,
  dictationCheckFlag: PropTypes.bool.isRequired
};
