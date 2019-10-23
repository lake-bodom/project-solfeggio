import React from "react";
import ModalWindow from "../modalWindow/ModalWindow";

import PropTypes from "prop-types";

const ClearSettingsModalBody = ({ close, saveButtonHandler }) => {

  return (
    <ModalWindow close={close} saveButton={true}
      saveButtonName={"Да"}
      cancelButton={true}
      cancelButtonName={"Нет"}
      saveButtonHandler={saveButtonHandler}
      cancelButtonHandler={() => { }}>
      <h3>Сбросить все настройки</h3>
      <p>Вы уверены, что хотите совершить сброс всех настроек?</p>
    </ModalWindow>
  );
};

ClearSettingsModalBody.propTypes = {
  close: PropTypes.func.isRequired,
  saveButtonHandler: PropTypes.func.isRequired
};

export default ClearSettingsModalBody;