import React, { Component } from "react";

import PropTypes from "prop-types";
import Button from "../button/Button";

import "./errorBoundary.css";
import ClearSettings from "../../containers/clearSettingsContainer";

export default class ErrorBoundary extends Component {

	state = {
		hasError: false
	}

	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}

	reloadHandler = () => {
		window.location.reload(true);
	}

	render() {
		return (
			<React.Fragment>
				{
					this.state.hasError ?
						<div className="error-boundary">
							<p>
								Похоже, что-то пошло не так. Попробуйте перезагрузить страницу. Если не помогло, сбросьте все настройки, а после этого повторно перезагрузите страницу.
							</p>
							<p>
								<ClearSettings withTitle={false} />
							</p>
							<p>
								<Button onClick={this.reloadHandler}>
									Перезагрузить страницу
								</Button>
							</p>

						</div>
						:
						this.props.children
				}
			</React.Fragment>
		);
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired
};