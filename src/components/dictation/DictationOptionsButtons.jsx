import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

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
  const access = amountOfNotes === sequenceOfWrittenMelody.length;

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
