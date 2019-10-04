import React, { Component } from "react";

import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

export default class FindNote extends Component {
  componentDidMount() {
    this.props.actionSetActiveNote(this.props.sliceArr);
    this.props.actionSetMode({ mode: "Искать ноту", stat: true });
    this.props.actionUpdatePianoKeys();
  }

  componentWillUnmount() {
    this.props.actionStatisticsClearing();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.needToWriteNote && !this.props.needToWriteNote) {
      if (this.props.playNote !== null) {
        const playNote = this.props.playNote.key;
        const note = this.props.note;

        if (playNote === note) {
          this.props.actionIncrementRightAnswers();
          this.setVisualEffect({ right: true });
        } else {
          this.props.actionIncrementAmountOfAnswers();
          this.setVisualEffect({ right: false, note });
        }
        this.props.actionSetActiveNote(this.props.sliceArr);
      }
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
      this.props.actionTurnOffVisualization(options);
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
      this.props.actionTurnOffVisualization(options1);
      this.props.actionTurnOffVisualization(options2);
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
    const { needToWriteNote } = this.props;
    const { playButtonHandler, answerButtonHandler } = this;

    return (
      <div className="findNote">
        <ButtonsGroup cls="horizontal">
          <Button
            cls={needToWriteNote ? "secondary-outline" : "info"}
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
  actionTurnOffVisualization: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  actionSetMode: PropTypes.func.isRequired,
  actionShowNotesOnThePiano: PropTypes.func.isRequired,
  actionNeedToWriteNote: PropTypes.func.isRequired,
  actionHideAnswer: PropTypes.func.isRequired,
  actionIncrementAmountOfAnswers: PropTypes.func.isRequired,
  actionIncrementRightAnswers: PropTypes.func.isRequired,
  actionStatisticsClearing: PropTypes.func.isRequired,
  statistics: PropTypes.shape({
    nameOfInterval: PropTypes.string.isRequired,
    rightAnswers: PropTypes.number.isRequired,
    amountOfAnswers: PropTypes.number.isRequired,
    right: PropTypes.bool.isRequired,
    showAnswer: PropTypes.bool.isRequired,
  }).isRequired,
  note: PropTypes.number.isRequired,
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  playNote: PropTypes.object,
  needToWriteNote: PropTypes
};

