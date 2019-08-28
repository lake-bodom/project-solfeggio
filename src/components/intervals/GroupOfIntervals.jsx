import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const GroupOfIntervals = ({
  group,
  settingsIsOpen,
  actionInverseChosenInterval
}) => {
  const body = group.map(interval => {
    const funcOnClick = settingsIsOpen ? actionInverseChosenInterval : () => {};
    return (
      <Button
        key={interval.name}
        onClick={() => {
          funcOnClick(interval);
        }}
      >
        {settingsIsOpen ? (
          <span className="check">
            {interval.chosen
              ? String.fromCharCode(10003)
              : String.fromCharCode(215)}
          </span>
        ) : null}
        {interval.rusName}
      </Button>
    );
  });
  return <ButtonsGroup cls="vertical">{body}</ButtonsGroup>;
};

export default GroupOfIntervals;