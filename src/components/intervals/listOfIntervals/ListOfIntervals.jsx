import React from "react";
import GroupOfIntervals from "./GroupOfIntervals";
const ListOfIntervals = ({ groupsOfIntervals }) => {
  const body = groupsOfIntervals.map(group => (
    <GroupOfIntervals group={group} key={group[0].name} />
  ));

  return <React.Fragment>{body}</React.Fragment>;
};

export default ListOfIntervals;
