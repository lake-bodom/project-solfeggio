import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const DictationPlayButtons = ({ playGuessedMelody, playWrittenMelody }) => {
  return (
    <ButtonsGroup cls="horizontal">
      <Button onClick={playGuessedMelody}>Играть угадываемую мелодию</Button>
      <Button onClick={playWrittenMelody}>Играть написанную мелодию</Button>
    </ButtonsGroup>
  );
};

export default DictationPlayButtons;
