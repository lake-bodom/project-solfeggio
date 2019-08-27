import React from "react";
import ButtonsGroup from "../../buttonsGroup/ButtonsGroup";
import Button from "../../button/Button";

const RightSideButtons = ({
  actionSetActiveTypeOfInterval,
  typesOfInterval: { melodicDown, melodicUp, harmonic }
}) => {
  const primary = "primary active";
  const primaryOutline = "primary-outline";

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

export default RightSideButtons;
