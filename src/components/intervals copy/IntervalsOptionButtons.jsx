import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

const IntervalsOptionButtons = ({
  play,
  typeOfInterval,
  sequenceOfNotes,
  settingsIsOpen,
  actionSetActiveTypeOfInterval,
  actionSettingsClick
}) => {
  return (
    <div className="intervalsOptionsButtons">
      <LeftSideButtons
        typeOfInterval={typeOfInterval}
        play={play}
        sequenceOfNotes={sequenceOfNotes}
        actionSettingsClick={actionSettingsClick}
        settingsIsOpen={settingsIsOpen}
      />
      <RightSideButtons
        typeOfInterval={typeOfInterval}
        actionSetActiveTypeOfInterval={actionSetActiveTypeOfInterval}
      />
    </div>
  );
};

export default IntervalsOptionButtons;
