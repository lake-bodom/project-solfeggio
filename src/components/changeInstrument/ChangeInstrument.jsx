import React from "react";

import { instruments } from "./instruments";
import OptionFromSelect from "../optionFromSelect/OptionFromSelect";
import Select from "../select/Select";

import PropTypes from "prop-types";

const ChangeInstrument = ({ children, actionSetInstrumentId, instrumentId }) => {

	const selectBody = instruments.map((elem, index) => {
		return <OptionFromSelect index={elem.id} fullName={`${index + 1}) ${elem.name}`} disabled={false} key={elem.id} />;
	});

	const selectHandler = (e) => {
		actionSetInstrumentId(+e.target.value);
	};

	return (
		<div className="input-settings">
			<h3>Выбрать инструмент:</h3>
			<div className="input-settings-wrap">
				<Select onChange={selectHandler} value={instrumentId}>
					{selectBody}
				</Select>
				{children}
			</div>

		</div>
	);
};

ChangeInstrument.propTypes = {
	children: PropTypes.node.isRequired,
	actionSetInstrumentId: PropTypes.func.isRequired,
	instrumentId: PropTypes.number.isRequired

};

export default ChangeInstrument;