import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const DictationPlayButtons = ({ playGuessedMelody, playWrittenMelody }) => {
  return (
    <ButtonsGroup cls="horizontal">
      <Button onClick={playGuessedMelody}>Играть угадываемую мелодию</Button>
      <Button onClick={playWrittenMelody}>Играть написанную мелодию</Button>
    </ButtonsGroup>
  );
};

DictationPlayButtons.propTypes = {
  playGuessedMelody: PropTypes.func.isRequired,
  playWrittenMelody: PropTypes.func.isRequired
};

export default DictationPlayButtons;
