import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const LeftSideButtons = ({
  sequenceOfNotes,
  nextSequenceOfNotes,
  typeOfInterval,
  settingsIsOpen,
  showAnswer,
  sliceArr,
  duration,
  play,
  actionIntervalsSettingsAction,
  actionNextButtonClick,
  actionGetNextInterval,
  actionHideAnswer,
  actionUpdatePianoKeys,
  actionKeyboardSetPlayFlag,
  playFlag
}) => {
  const playInterval = () => {
    let first, second;

    if (showAnswer) {
      first = nextSequenceOfNotes[0];
      second = nextSequenceOfNotes[1];
    } else {
      first = sequenceOfNotes[0];
      second = sequenceOfNotes[1];
    }

    switch (typeOfInterval) {
      case "melodicUp": {
        play(first);
        setTimeout(() => {
          play(second);
        }, duration * 1000);
        break;
      }
      case "melodicDown": {
        play(second);
        setTimeout(() => {
          play(first);
        }, duration * 1000);
        break;
      }
      case "harmonic": {
        play(first);
        play(second);
        break;
      }
      default:
        return;
    }
  };

  const nextClickHandler = () => {
    actionNextButtonClick(!settingsIsOpen);
    actionGetNextInterval({ sliceArr });
    actionUpdatePianoKeys();
    actionHideAnswer();
    playInterval();
  };

  const optionsClickHandler = () => {
    actionIntervalsSettingsAction(!settingsIsOpen);
    const initNewIntervalSequence = true;

    if (settingsIsOpen) {
      actionNextButtonClick();
      actionUpdatePianoKeys();
      actionHideAnswer();
      actionGetNextInterval({ sliceArr, initNewIntervalSequence });
    }
  };

  if (playFlag && !settingsIsOpen) {
    setTimeout(() => {
      actionKeyboardSetPlayFlag(false);
    }, 300);
    if (showAnswer) {
      nextClickHandler();

    } else {
      playInterval();
    }
  } else {
    actionKeyboardSetPlayFlag(false);
  }

  const playButtonClasses = [(settingsIsOpen ? "secondary" : "info")];

  if (playFlag) {
    playButtonClasses.push("active");
  }

  return (
    <ButtonsGroup cls="horizontal">
      <Button
        cls={playButtonClasses.join(" ")}
        disabled={settingsIsOpen ? true : false}
        onClick={showAnswer ? nextClickHandler : playInterval}
      >
        {showAnswer ? "Дальше" : "Играть интервал"}
      </Button>
      <Button
        cls={settingsIsOpen ? "info" : "secondary"}
        onClick={optionsClickHandler}
      >
        {settingsIsOpen ? "Установить" : "Настройки"}
      </Button>
    </ButtonsGroup>
  );
};

LeftSideButtons.propTypes = {
  settingsIsOpen: PropTypes.bool,
  sequenceOfNotes: PropTypes.arrayOf(PropTypes.number),
  nextSequenceOfNotes: PropTypes.arrayOf(PropTypes.number),
  typeOfInterval: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool,
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  duration: PropTypes.number.isRequired,
  play: PropTypes.func.isRequired,
  actionIntervalsSettingsAction: PropTypes.func.isRequired,
  actionNextButtonClick: PropTypes.func.isRequired,
  actionGetNextInterval: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  actionHideAnswer: PropTypes.func.isRequired,
  actionKeyboardSetPlayFlag: PropTypes.func.isRequired,
  playFlag: PropTypes.bool.isRequired
};

export default LeftSideButtons;

