import React from "react";
import Button from "../../button/Button";

import PropTypes from "prop-types";

const PlayExampleButton = ({ play, duration }) => {
	const clickHandler = () => {
		const notesKeyArray = [60, 64, 67, 72];

		for (let i = 0; i < notesKeyArray.length; i++) {
			setTimeout(() => {
				play(notesKeyArray[i]);
			}, duration * 1000 * i);
		}
	};
	return <Button onClick={clickHandler}>
		Воспроизвести пример
	</Button>;
};

PlayExampleButton.propTypes = {
	play: PropTypes.func.isRequired,
	duration: PropTypes.number.isRequired
};

export default PlayExampleButton;