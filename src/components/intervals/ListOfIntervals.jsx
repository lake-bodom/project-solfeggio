import React from "react";
import GroupOfIntervals from "./GroupOfIntervals";

import {
  getChosenIntervals,
  createGroupsOfIntervals
} from "../../store/dataOfIntervals";

const ListOfIntervals = ({
  settingsIsOpen,
  allIntervals,
  actionInverseChosenInterval
}) => {
  let arr = [];

  if (settingsIsOpen) {
    arr = createGroupsOfIntervals(allIntervals);
  } else {
    arr = createGroupsOfIntervals(getChosenIntervals(allIntervals));
  }

  const body = arr.map(group => (
    <GroupOfIntervals
      group={group}
      key={group[0].name}
      settingsIsOpen={settingsIsOpen}
      actionInverseChosenInterval={actionInverseChosenInterval}
    />
  ));

  return <div className="listOfIntervals">{body}</div>;
};

export default ListOfIntervals;
