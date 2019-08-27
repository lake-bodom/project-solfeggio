import React from "react";
import ButtonsGroup from "../../buttonsGroup/ButtonsGroup";
import Button from "../../button/Button";

const GroupOfIntervals = ({ group }) => {
  const body = group.map(interval => {
    return <Button key={interval.name}>{interval.rusName}</Button>;
  });
  return <ButtonsGroup cls="vertical">{body}</ButtonsGroup>;
};

export default GroupOfIntervals;
