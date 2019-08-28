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
  const widthWindow = window.innerWidth;
  const cls = widthWindow < 810 ? "vertical" : "horizontal";
  return (
    <div className="intervalsOptionsButtons">
      <LeftSideButtons
        typeOfInterval={typeOfInterval}
        play={play}
        sequenceOfNotes={sequenceOfNotes}
        actionSettingsClick={actionSettingsClick}
        settingsIsOpen={settingsIsOpen}
        cls={cls}
      />
      <RightSideButtons
        typeOfInterval={typeOfInterval}
        actionSetActiveTypeOfInterval={actionSetActiveTypeOfInterval}
        cls={cls}
      />
    </div>
  );
};

export default IntervalsOptionButtons;