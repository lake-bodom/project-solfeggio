import React from "react";

import PropTypes from "prop-types";

import HotKeyComponent from "./HotKeyComponent";
import "./keyboardSettings.css";

const KeyboardSettings = ({ hotKeys, actionKeyboardSetNewHotKeyFlag }) => {

	const intervalHotKeyComponents = hotKeys.listOfIntervalsHotKeys.map((hotKey, index) => {
		return <HotKeyComponent key={`${hotKey}-${Date.now()}-${index}`} title={`Горячая клавиша ${index + 1}-ого интервала списка:`} hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="listOfIntervalsHotKeys" index={index} />;
	});

	return <div className="keyboard-settings">
		<h3>Настройка горячих клавиш:</h3>
		<HotKeyComponent title="Открыть/закрыть меню или всплывающее окно:" hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="closeHotKey" index={null} />
		<HotKeyComponent title="Воспроизвести задание:" hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="playHotKey" index={null} />
		<HotKeyComponent title="Изменить режим в задании:" hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="changeModeHoteKey" index={null} />
		<HotKeyComponent title="Воспроизвести написанную мелодию (диктант):" hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="playWrittenMelodyHoteKey" index={null} />
		<HotKeyComponent title="Удалить записанную ноту (диктант):" hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="dictationClearNoteHoteKey" index={null} />
		<HotKeyComponent title="Проверить ответ (диктант):" hotKeys={hotKeys} actionKeyboardSetNewHotKeyFlag={actionKeyboardSetNewHotKeyFlag} hotKeyType="dictationCheckHoteKey" index={null} />
		{intervalHotKeyComponents}
	</div>;
};

KeyboardSettings.propTypes = {
	hotKeys: PropTypes.object.isRequired,
	actionKeyboardSetNewHotKeyFlag: PropTypes.func.isRequired
};


export default KeyboardSettings;