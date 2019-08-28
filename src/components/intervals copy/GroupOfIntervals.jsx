import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

const GroupOfIntervals = ({ group, settingsIsOpen }) => {
  const body = group.map(interval => {
    return (
      <Button
        key={interval.name}
        onClick={() => {
          interval.chosen = !interval.chosen;
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
