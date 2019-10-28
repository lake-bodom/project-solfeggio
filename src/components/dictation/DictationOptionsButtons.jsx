import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";


const DictationOptionsButtons = ({
  modeWrite,
  changeMode,
  clearButtonHandler,
  checkAnswerHandler,
  readyToCheck,
  answerGiven,
  nextPlayButtonHandler,
  settingsButtonHandler,
  dictationClearNoteFlag
}) => {

  const access = readyToCheck && !answerGiven;


  const clearButtonClasses = ["secondary-outline"];

  if (dictationClearNoteFlag) {
    clearButtonClasses.push("active");
  }


  return (
    <div className="dictation-options-buttons">
      <ButtonsGroup cls="horizontal">
        <Button
          onClick={nextPlayButtonHandler}
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
        <Button onClick={clearButtonHandler} cls={clearButtonClasses.join(" ")}>Стереть</Button>
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
  nextPlayButtonHandler: PropTypes.func.isRequired,
  clearButtonHandler: PropTypes.func.isRequired,
  checkAnswerHandler: PropTypes.func.isRequired,
  settingsButtonHandler: PropTypes.func.isRequired,
  sequenceOfWrittenMelody: PropTypes.arrayOf(PropTypes.object),
  amountOfNotes: PropTypes.number.isRequired,
  answerGiven: PropTypes.bool.isRequired,
  dictationClearNoteFlag: PropTypes.bool.isRequired,
  readyToCheck: PropTypes.bool.isRequired
};
