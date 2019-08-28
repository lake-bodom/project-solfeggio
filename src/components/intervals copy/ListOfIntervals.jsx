import React from "react";
import GroupOfIntervals from "./GroupOfIntervals";

const ListOfIntervals = ({
  groupsOfFilteredIntervals,
  groupsOfAllIntervals,
  settingsIsOpen
}) => {
  const arr = settingsIsOpen ? groupsOfAllIntervals : groupsOfFilteredIntervals;
  const body = arr.map(group => (
    <GroupOfIntervals
      group={group}
      key={group[0].name}
      settingsIsOpen={settingsIsOpen}
    />
  ));

  return <div className={"listOfIntervals"}>{body}</div>;
};

export default ListOfIntervals;
