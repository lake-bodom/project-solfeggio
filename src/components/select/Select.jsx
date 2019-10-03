import React from "react";
import "./select.css";

const Select = ({ value, onChange, children }) => {
	return <select className="select" defaultValue={value} onChange={onChange}>
		{children}
	</select>
};

export default Select;