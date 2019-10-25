import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const DictationPlayButtons = ({ playGuessedMelody, playWrittenMelody, playFlag, playWrittenMelodyFlag }) => {

  const playGuessedButtonClasses = [("secondary-outline")];
  const playWrittenMelodyButtonClasses = [("secondary-outline")];

  if (playFlag) {
    playGuessedButtonClasses.push("active");
  }

  if (playWrittenMelodyFlag) {
    playWrittenMelodyButtonClasses.push("active");
  }

  return (
    <ButtonsGroup cls="horizontal">
      <Button cls={playGuessedButtonClasses.join(" ")} onClick={playGuessedMelody}>Играть угадываемую мелодию</Button>
      <Button cls={playWrittenMelodyButtonClasses.join(" ")} onClick={playWrittenMelody}>Играть написанную мелодию</Button>
    </ButtonsGroup>
  );
};

DictationPlayButtons.propTypes = {
  playGuessedMelody: PropTypes.func.isRequired,
  playWrittenMelody: PropTypes.func.isRequired,
  playFlag: PropTypes.bool.isRequired,
  playWrittenMelodyFlag: PropTypes.bool
};

DictationPlayButtons.defaultProps = {
  playWrittenMelodyFlag: false
};

export default DictationPlayButtons;
