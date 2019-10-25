import React from "react";

import "./inputRange.css";

import PropTypes from "prop-types";

const InputRange = ({ level, onChangeHandler, min, max, step }) => {

	const percent = (level - min) / (max - min);

	let levelValueStyle;

	if (percent < 0.35) {
		levelValueStyle = { left: `calc(-8px  + 100% * ${percent} - 10px * ${percent} )` };
	} else if (percent > 0.85) {
		levelValueStyle = { left: `calc(-12px * ${percent ? percent : 1} + 100% * ${percent} - 11px * ${percent} )` };
	} else if (percent > 0.65) {
		levelValueStyle = { left: `calc(-14px * ${percent ? percent : 1} + 100% * ${percent} - 11px * ${percent} )` };
	} else {
		levelValueStyle = { left: `calc(-18px * ${percent ? percent : 1} + 100% * ${percent} - 11px * ${percent} )` };
	}


	return (
		<div className="input-range-wrap" >
			<div className="input-range-value" style={levelValueStyle}>{level}</div>
			<input type="range" min={min} max={max} step={step} onChange={onChangeHandler} value={level} />
		</div>
	);
};

InputRange.propTypes = {
	level: PropTypes.number.isRequired,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
	step: PropTypes.number.isRequired,
	onChangeHandler: PropTypes.func.isRequired
};

export default InputRange;
