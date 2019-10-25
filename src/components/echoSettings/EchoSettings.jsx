import React from "react";

import PropTypes from "prop-types";
import InputRange from "../inputRange/InputRange";

const EchoSettings = ({ children, echoLevel, actionSetEchoLevel }) => {

	const onChangeHandler = (e) => {
		actionSetEchoLevel(+e.target.value);
	};

	return <div className="input-settings">
		<h3>Уровень эхо:</h3>
		<div className="input-settings-wrap">
			<InputRange min={0} max={1} step={0.1} level={echoLevel} onChangeHandler={onChangeHandler} />
			{children}
		</div>
	</div >;
};

EchoSettings.propTypes = {
	children: PropTypes.node.isRequired,
	echoLevel: PropTypes.number.isRequired,
	actionSetEchoLevel: PropTypes.func.isRequired
};

export default EchoSettings;
