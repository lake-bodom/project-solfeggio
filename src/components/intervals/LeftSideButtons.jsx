import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const LeftSideButtons = ({
  sequenceOfNotes,
  play,
  typesOfInterval: { melodicDown, melodicUp, harmonic }
}) => {
  const playInterval = () => {
    const first = sequenceOfNotes[0].key;
    const second = sequenceOfNotes[1].key;

    if (melodicUp) {
      play(first);
      setTimeout(() => {
        play(second);
      }, 800);
    }

    if (melodicDown) {
      play(second);
      setTimeout(() => {
        play(first);
      }, 800);
    }

    if (harmonic) {
      play(first);
      play(second);
    }
  };

  return (
    <ButtonsGroup cls="horizontal">
      <Button cls="info" onClick={playInterval}>
        Играть интервал
      </Button>
      <Button cls="secondary">Настройки</Button>
    </ButtonsGroup>
  );
};

export default LeftSideButtons;
