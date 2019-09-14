import React, { Component } from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

export default class FindNote extends Component {
  componentDidMount() {
    this.props.actionSetActiveNote(this.props.sliceArr);
  }

  componentWillUnmount() {
    this.props.actionStatisticsClearing();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.needToWriteNote && !this.props.needToWriteNote) {
      if (this.props.playNote !== null) {
        const playNote = this.props.playNote;
        const note = this.props.note;
        if (playNote === note) {
          this.props.actionIncrementRightAnswers();
          this.setVisualEffect(true);
        } else {
          this.props.actionIncrementAmountOfAnswers();
          this.setVisualEffect(false);
        }
        this.props.actionSetActiveNote(this.props.sliceArr);
      }
    }
  }

  setVisualEffect = right => {
    if (right) {
      const options = { sequence: [this.props.playNote], type: "right" };
      this.props.actionShowNotesOnThePiano(options);

      setTimeout(() => {
        this.props.actionTurnOffVisualization(options);
      }, 2000);
    } else {
      const options1 = {
        sequence: [this.props.playNote],
        type: "wrong"
      };

      const options2 = {
        sequence: [this.props.note],
        type: "right"
      };

      this.props.actionShowNotesOnThePiano(options1);
      this.props.actionShowNotesOnThePiano(options2);

      setTimeout(() => {
        this.props.actionTurnOffVisualization(options1);
        this.props.actionTurnOffVisualization(options2);
      }, 1500);
    }
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
