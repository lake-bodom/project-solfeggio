import React from "react";
import "./select.css";

import PropTypes from "prop-types";

const Select = ({ value, onChange, children }) => {
	return <select className="select" defaultValue={value} onChange={onChange}>
		{children}
	</select>;
};

Select.propTypes = {
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Select;