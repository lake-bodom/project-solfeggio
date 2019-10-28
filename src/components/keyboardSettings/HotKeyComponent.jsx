import React from "react";

import PropTypes from "prop-types";
import Button from "../button/Button";


const HotKeyComponent = ({ hotKeys, actionKeyboardSetNewHotKeyFlag, title, hotKeyType, index }) => {

	const typeInState = hotKeys.newHotKey.newHotKeyType;
	const hotKeyInState = hotKeyType === "listOfIntervalsHotKeys" ? hotKeys[hotKeyType][index] : hotKeys[hotKeyType];

	const needToChange = hotKeys.newHotKey.change && typeInState === hotKeyType && index === hotKeys.newHotKey.index;

	const keyText = hotKeyInState === " " ? "Space" : hotKeyInState === null ? "Не задано" : hotKeyInState;

	const buttonText = needToChange ? "Выберите желаемую клавишу" : `Клавиша: "${keyText}"`;

	const cls = needToChange ? "info" : "info-outline";

	const onClick = () => {
		actionKeyboardSetNewHotKeyFlag(
			{
				change: true,
				newHotKeyType: hotKeyType,
				index,
				key: null
			}
		);
	};

	return (
		<React.Fragment>
			<h4>{title}</h4>
			<p>
				<Button onClick={onClick} type="text" cls={cls}>
					{buttonText}
				</Button>
				{needToChange ? <span>Предыдущее значение:&nbsp;&quot;{keyText}&quot;</span> : null}
			</p>
		</React.Fragment>
	);
};

HotKeyComponent.propTypes = {
	hotKeys: PropTypes.object.isRequired,
	actionKeyboardSetNewHotKeyFlag: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	hotKeyType: PropTypes.string.isRequired,
	index: PropTypes.number
};


export default HotKeyComponent;