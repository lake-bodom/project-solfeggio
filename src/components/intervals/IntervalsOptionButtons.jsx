import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

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
