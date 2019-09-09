import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const LeftSideButtons = ({
  sequenceOfNotes,
  typeOfInterval,
  settingsIsOpen,
  showAnswer,
  sliceArr,
  play,
  actionSettingsClick,
  actionNextButtonClick,
  actionGetNextInterval,
  actionTurnOffVisualization
}) => {
  const playInterval = () => {
    const first = sequenceOfNotes[0].key;
    const second = sequenceOfNotes[1].key;

    switch (typeOfInterval) {
      case "melodicUp": {
        play(first);
        setTimeout(() => {
          play(second);
        }, 800);
        break;
      }
      case "melodicDown": {
        play(second);
        setTimeout(() => {
          play(first);
        }, 800);
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
    const sequence = [sequenceOfNotes[0].key, sequenceOfNotes[1].key];
    actionNextButtonClick();
    actionGetNextInterval(sliceArr);
    actionTurnOffVisualization({ sequence });
  };

  return (
    <ButtonsGroup cls="horizontal">
      <Button
        cls={settingsIsOpen ? "secondary" : "info"}
        disabled={settingsIsOpen ? true : false}
        onClick={showAnswer ? nextClickHandler : playInterval}
      >
        {showAnswer ? "Дальше" : "Играть интервал"}
      </Button>
      <Button
        cls={settingsIsOpen ? "info" : "secondary"}
        onClick={actionSettingsClick}
      >
        {settingsIsOpen ? "Установить" : "Настройки"}
      </Button>
    </ButtonsGroup>
  );
};

LeftSideButtons.propTypes = {
  sequenceOfNotes: PropTypes.array.isRequired,
  typeOfInterval: PropTypes.string.isRequired,
  settingsIsOpen: PropTypes.bool.isRequired,
  play: PropTypes.func.isRequired,
  actionSettingsClick: PropTypes.func.isRequired
};

export default LeftSideButtons;
