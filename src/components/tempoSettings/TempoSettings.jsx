import React from "react";

import PropTypes from "prop-types";
import InputRange from "../inputRange/InputRange";

const TempoSettings = ({ children, bpm, actionSetBpmLevel }) => {

	const onChangeHandler = (e) => {
		actionSetBpmLevel(+e.target.value);
	};

	return <div className="input-settings">
		<h3>Настрока темпа (bpm):</h3>
		<div className="input-settings-wrap">
			<InputRange min={50} max={180} step={1} level={bpm} onChangeHandler={onChangeHandler} />
			{children}
		</div>
	</div >;
};

TempoSettings.propTypes = {
	children: PropTypes.node.isRequired,
	bpm: PropTypes.number.isRequired,
	actionSetBpmLevel: PropTypes.func.isRequired
};

export default TempoSettings;
