import React from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const DictationSettings = ({ settingsButtonHandler }) => {
  const amountOfNotes = [3, 4, 5, 6, 7];

  const selectBody = amountOfNotes.map(elem => {
    return (
      <option value={elem} key={elem}>
        {elem}
      </option>
    );
  });

  //   const SelectAmountJSX = <select>{selectBody}</select>;

  console.log(selectBody);
  /* const SelectModeJSX = (
    <select>
      <option value={false}>Играть</option>
      <option value={true}>Писать</option>
    </select>
  );*/
  return (
    <ModalWindow close={settingsButtonHandler}>
      <React.Fragment>
        <h3>Настройки диктанта</h3>
        <h4>Количество нот:</h4>
        {/* <SelectAmountJSX /> */}
        <h4>Режим по умолчанию:</h4>
        {/* <SelectModeJSX /> */}
        <ButtonsGroup cls="flex">
          <Button cls="info">Сохранить</Button>
          <Button cls="danger">Отменить</Button>
        </ButtonsGroup>
      </React.Fragment>
    </ModalWindow>
  );
};

export default DictationSettings;
