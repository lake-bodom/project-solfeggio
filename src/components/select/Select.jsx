import React from "react";
import "./select.css";

import PropTypes from "prop-types";

const Select = ({ onChange, children, value }) => {
	return <select className="select" value={value} onChange={onChange}>
		{children}
	</select>;
};

Select.propTypes = {
	value: PropTypes.PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number
	]).isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Select;