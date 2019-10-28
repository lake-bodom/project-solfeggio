import React from "react";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";

const GroupOfIntervals = ({
  groupIndex,
  group,
  settingsIsOpen,
  intervalClickHandler,
  activeKeyboardInterval
}) => {

  const body = group.map((interval, index) => {

    let cls = ["secondary-outline"];

    if (activeKeyboardInterval && activeKeyboardInterval.name && activeKeyboardInterval.name === interval.name) {
      cls.push("active");
    }

    return (
      <Button
        key={interval.name}
        onClick={() => {
          intervalClickHandler(interval);
        }}
        cls={cls.join(" ")}
      >
        {settingsIsOpen ? (
          <span className="check">
            {interval.chosen
              ? String.fromCharCode(10003)
              : String.fromCharCode(215)}
          </span>
        ) : null}
        <b>{groupIndex * 4 + index + 1})&nbsp;</b>{interval.rusName}
      </Button>
    );
  });

  GroupOfIntervals.propTypes = {
    groupIndex: PropTypes.number.isRequired,
    group: PropTypes.arrayOf(PropTypes.object).isRequired,
    settingsIsOpen: PropTypes.bool,
    intervalClickHandler: PropTypes.func.isRequired,
    activeKeyboardInterval: PropTypes.object
  };

  return <ButtonsGroup cls="vertical">{body}</ButtonsGroup>;
};

export default GroupOfIntervals;
