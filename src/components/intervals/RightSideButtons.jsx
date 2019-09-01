import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const RightSideButtons = ({
  actionSetActiveTypeOfInterval,
  typeOfInterval
}) => {
  const primary = "primary active";
  const primaryOutline = "primary-outline";

  const melodicUp = typeOfInterval === "melodicUp";
  const melodicDown = typeOfInterval === "melodicDown";
  const harmonic = typeOfInterval === "harmonic";

  return (
    <ButtonsGroup cls="horizontal">
      <Button
        cls={melodicUp ? primary : primaryOutline}
        onClick={() => {
          actionSetActiveTypeOfInterval("melodicUp");
        }}
        disabled={melodicUp ? true : false}
      >
        Мелодический вверх
      </Button>
      <Button
        cls={melodicDown ? primary : primaryOutline}
        onClick={() => {
          actionSetActiveTypeOfInterval("melodicDown");
        }}
        disabled={melodicDown ? true : false}
      >
        Мелодический вниз
      </Button>
      <Button
        cls={harmonic ? primary : primaryOutline}
        onClick={() => {
          actionSetActiveTypeOfInterval("harmonic");
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
  actionSetActiveTypeOfInterval: PropTypes.func.isRequired
};

export default RightSideButtons;
