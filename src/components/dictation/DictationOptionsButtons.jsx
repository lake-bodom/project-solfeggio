import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const DictationOptionsButtons = ({
  modeWrite,
  changeMode,
  clearButtonHandler,
  checkAnswerHandler
}) => {
  return (
    <div className="dictation-options-buttons">
      <ButtonsGroup cls="horizontal">
        <Button
          onClick={changeMode}
          cls={modeWrite ? "info-outline" : "info active"}
          disabled={modeWrite ? false : true}
        >
          Играть
        </Button>
        <Button
          onClick={changeMode}
          cls={modeWrite ? "info active" : "info-outline"}
          disabled={modeWrite ? true : false}
        >
          Писать
        </Button>
      </ButtonsGroup>
      <ButtonsGroup cls="horizontal">
        <Button onClick={clearButtonHandler}>Стереть</Button>
        <Button onClick={checkAnswerHandler} cls="danger">
          Проверить
        </Button>
      </ButtonsGroup>
      <Button cls="primary">Настроки</Button>
    </div>
  );
};

export default DictationOptionsButtons;
