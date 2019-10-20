import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";


const DictationOptionsButtons = ({
  modeWrite,
  changeMode,
  clearButtonHandler,
  checkAnswerHandler,
  sequenceOfWrittenMelody,
  amountOfNotes,
  answerGiven,
  nextButtonHandler,
  settingsButtonHandler
}) => {
  const access = amountOfNotes === sequenceOfWrittenMelody.length && !answerGiven;

  const clickHandlerNextPlayButton = () => {
    changeMode();
    if (answerGiven) {
      nextButtonHandler();
    }
  };

  return (
    <div className="dictation-options-buttons">
      <ButtonsGroup cls="horizontal">
        <Button
          onClick={clickHandlerNextPlayButton}
          cls={modeWrite ? "info-outline" : "info active"}
          disabled={modeWrite ? false : true}
        >
          {answerGiven ? "Далее" : "Играть"}
        </Button>
        {answerGiven ? null : (
          <Button
            onClick={changeMode}
            cls={modeWrite ? "info active" : "info-outline"}
            disabled={modeWrite ? true : false}
          >
            Писать
          </Button>
        )}
      </ButtonsGroup>
      <ButtonsGroup cls="horizontal">
        <Button onClick={clearButtonHandler}>Стереть</Button>
        <Button
          onClick={checkAnswerHandler}
          cls={access ? "danger" : "danger-outline"}
          disabled={!access}
        >
          Проверить
        </Button>
      </ButtonsGroup>
      <Button cls="primary" onClick={settingsButtonHandler}>
        Настроки
      </Button>
    </div>
  );
};

export default DictationOptionsButtons;

DictationOptionsButtons.propTypes = {
  modeWrite: PropTypes.bool.isRequired,
  changeMode: PropTypes.func.isRequired,
  nextButtonHandler: PropTypes.func.isRequired,
  clearButtonHandler: PropTypes.func.isRequired,
  checkAnswerHandler: PropTypes.func.isRequired,
  settingsButtonHandler: PropTypes.func.isRequired,
  sequenceOfWrittenMelody: PropTypes.arrayOf(PropTypes.object),
  amountOfNotes: PropTypes.number.isRequired,
  answerGiven: PropTypes.bool.isRequired
};
