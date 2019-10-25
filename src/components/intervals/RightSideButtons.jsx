import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const RightSideButtons = ({
  actionSetActiveTypeOfInterval,
  typeOfInterval,
  changeModeFlag,
  actionKeyboardSetChangeModeFlag
}) => {
  const primary = "primary active";
  const primaryOutline = "primary-outline";
  const modes = ["melodicUp", "melodicDown", "harmonic"];

  const melodicUp = typeOfInterval === modes[0];
  const melodicDown = typeOfInterval === modes[1];
  const harmonic = typeOfInterval === modes[2];

  const setModeFromKeyboard = () => {
    const indexOfMode = modes.indexOf(typeOfInterval);

    if (indexOfMode !== -1) {
      actionSetActiveTypeOfInterval(modes[(indexOfMode + 1) % modes.length]);
    }
  };

  if (changeModeFlag) {
    actionKeyboardSetChangeModeFlag(false);
    setModeFromKeyboard();
  }

  return (
    <ButtonsGroup cls="horizontal">
      <Button
        cls={melodicUp ? primary : primaryOutline}
        onClick={() => {
          actionSetActiveTypeOfInterval(modes[0]);
        }}
        disabled={melodicUp ? true : false}
      >
        Мелодический вверх
      </Button>
      <Button
        cls={melodicDown ? primary : primaryOutline}
        onClick={() => {
          actionSetActiveTypeOfInterval(modes[1]);
        }}
        disabled={melodicDown ? true : false}
      >
        Мелодический вниз
      </Button>
      <Button
        cls={harmonic ? primary : primaryOutline}
        onClick={() => {
          actionSetActiveTypeOfInterval(modes[2]);
        }}
        disabled={harmonic ? true : false}
      >
        Гармонический
      </Button>
    </ButtonsGroup>
  );
};

RightSideButtons.propTypes = {
  typeOfInterval: PropTypes.string.isRequired,
  actionSetActiveTypeOfInterval: PropTypes.func.isRequired,
  changeModeFlag: PropTypes.bool.isRequired,
  actionKeyboardSetChangeModeFlag: PropTypes.func.isRequired

};

export default RightSideButtons;
