import React, { Component } from "react";
import "./select.css";

import PropTypes from "prop-types";

// const Select = ({ value, onChange, children }) => {
// 	return <select className="select" defaultValue={value} onChange={onChange}>
// 		{children}
// 	</select>;
// };

class Select extends Component {

	state = {
		stateValue: ""
	}

	componentDidMount() {
		this.setState({
			stateValue: this.props.value
		});
	}

	componentDidUpdate() {
		if (this.props.value !== this.state.stateValue) {
			this.setState({
				stateValue: this.props.value
			});
		}
	}

	render() {
		const { onChange, children } = this.props;
		const { stateValue } = this.state;

		return <select className="select" value={stateValue} onChange={onChange}>
			{children}
		</select>;
	}
}

Select.propTypes = {
	value: PropTypes.PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.number
	]).isRequired,
	onChange: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};

export default Select;