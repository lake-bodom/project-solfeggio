import React from "react";
import ModalWindow from "../modalWindow/ModalWindow"

const ClearLocalStorageModalBody = ({ close, saveButtonHandler
	, cancelButtonHandler }) => {
	return (
		<ModalWindow close={close} saveButton={true}
			saveButtonName={"Сохранить"}
			cancelButton={true}
			cancelButtonName={"Отменить"}
			saveButtonHandler={saveButtonHandler}
			cancelButtonHandler={cancelButtonHandler}>
			<h3>Сбросить все настройки</h3>
		</ModalWindow>
	)
};

export default ClearLocalStorageModalBody;