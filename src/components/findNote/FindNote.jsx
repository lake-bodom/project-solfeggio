import React, { Component } from "react";

import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

export default class FindNote extends Component {
  componentDidMount() {
    this.props.actionSetActiveNote(this.props.sliceArr);
    this.props.actionSetMode({ mode: "Искать ноту", stat: true });
    this.props.actionUpdatePianoKeys();
    if (this.props.playFlag) {
      this.props.actionKeyboardSetPlayFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
  }

  componentWillUnmount() {
    this.props.actionStatisticsClearing();
    if (this.props.playFlag) {
      this.props.actionKeyboardSetPlayFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
  }

  componentDidUpdate(prevProps) {

    const { needToWriteNote, playNote, note, actionIncrementRightAnswers, actionIncrementAmountOfAnswers, actionSetActiveNote, playFlag, actionKeyboardSetPlayFlag, changeModeFlag, actionKeyboardSetChangeModeFlag, sliceArr } = this.props;

    if (prevProps.needToWriteNote && !needToWriteNote) {
      if (playNote !== null) {
        const playNoteKey = playNote.key;

        if (playNoteKey === note) {
          actionIncrementRightAnswers();
          this.setVisualEffect({ right: true });
        } else {
          actionIncrementAmountOfAnswers();
          this.setVisualEffect({ right: false, note });
        }
        actionSetActiveNote(sliceArr);
      }
    }

    if (playFlag) {
      this.playButtonHandler();
      setTimeout(() => {
        actionKeyboardSetPlayFlag(false);
      }, 300);
    }
    if (changeModeFlag) {
      this.setMode(!needToWriteNote);
      actionKeyboardSetChangeModeFlag(false);
    }
  }

  setVisualEffect = ({ right, note }) => {
    const sequence = [this.props.playNote.key];
    if (right) {
      this.setRightVisualEffect({ sequence });
    } else {
      this.setWrongVisualEffect({ sequence, note });
    }
  };

  setRightVisualEffect = ({ sequence }) => {
    const options = { sequence, type: "right" };
    this.props.actionShowNotesOnThePiano(options);

    setTimeout(() => {
      this.props.actionUpdatePianoKeys();
      this.props.actionHideAnswer();
    }, 2000);
  };

  setWrongVisualEffect = ({ sequence, note }) => {
    const options1 = {
      sequence,
      type: "wrong"
    };

    const options2 = {
      sequence: [note],
      type: "right"
    };

    this.props.actionShowNotesOnThePiano(options1);
    this.props.actionShowNotesOnThePiano(options2);

    setTimeout(() => {
      this.props.actionUpdatePianoKeys();
      this.props.actionHideAnswer();
    }, 1500);
  };

  playButtonHandler = () => {
    const { note } = this.props;

    this.props.play(note);
    this.setMode(false);
  };

  answerButtonHandler = () => {
    this.setMode(true);
  };

  setMode = bool => {
    if (this.props.needToWriteNote !== bool) {
      this.props.actionNeedToWriteNote(bool);
    }
  };

  render() {
    const { needToWriteNote, playFlag } = this.props;
    const { playButtonHandler, answerButtonHandler } = this;

    const playButtonClasses = [(needToWriteNote ? "secondary-outline" : "info")];

    if (playFlag) {
      playButtonClasses.push("active");
    }

    return (
      <div className="findNote">
        <ButtonsGroup cls="horizontal">
          <Button
            cls={playButtonClasses.join(" ")}
            onClick={playButtonHandler}
          >
            Играть ноту
          </Button>
          <Button
            cls={needToWriteNote ? "info" : "secondary-outline"}
            onClick={answerButtonHandler}
          >
            Ответить
          </Button>
        </ButtonsGroup>
      </div>
    );
  }
}

FindNote.propTypes = {
  play: PropTypes.func.isRequired,
  actionSetActiveNote: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  actionSetMode: PropTypes.func.isRequired,
  actionShowNotesOnThePiano: PropTypes.func.isRequired,
  actionNeedToWriteNote: PropTypes.func.isRequired,
  actionHideAnswer: PropTypes.func.isRequired,
  actionIncrementAmountOfAnswers: PropTypes.func.isRequired,
  actionIncrementRightAnswers: PropTypes.func.isRequired,
  actionStatisticsClearing: PropTypes.func.isRequired,
  statistics: PropTypes.shape({
    rightAnswers: PropTypes.number.isRequired,
    amountOfAnswers: PropTypes.number.isRequired,
    right: PropTypes.bool.isRequired,
    showAnswer: PropTypes.bool.isRequired
  }).isRequired,
  note: PropTypes.number,
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  playNote: PropTypes.object,
  needToWriteNote: PropTypes.bool.isRequired,
  playFlag: PropTypes.bool.isRequired,
  actionKeyboardSetPlayFlag: PropTypes.func.isRequired,
  changeModeFlag: PropTypes.bool.isRequired,
  actionKeyboardSetChangeModeFlag: PropTypes.func.isRequired
};

