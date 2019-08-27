import React from "react";
import LeftSideButtons from "../leftSideButtons/LeftSideButtons";
import RightSideButtons from "../rightSideButtons/RightSideButtons";

const IntervalsOptionButtons = ({
  play,
  typesOfInterval,
  actionSetActiveTypeOfInterval,
  sequenceOfNotes
}) => {
  return (
    <div className="intervalsOptionsButtons">
      <LeftSideButtons
        typesOfInterval={typesOfInterval}
        play={play}
        sequenceOfNotes={sequenceOfNotes}
      />
      <RightSideButtons
        typesOfInterval={typesOfInterval}
        actionSetActiveTypeOfInterval={actionSetActiveTypeOfInterval}
      />
    </div>
  );
};

export default IntervalsOptionButtons;
