import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

class IntervalsOptionButtons extends React.Component {
  componentDidMount() {
    this.props.actionGetNextInterval(this.props.sliceArr);
  }

  render() {
    const {
      sliceArr,
      play,
      typeOfInterval,
      sequenceOfNotes,
      settingsIsOpen,
      showAnswer,
      actionSetActiveTypeOfInterval,
      actionSettingsClick,
      actionNextButtonClick,
      actionGetNextInterval,
      actionTurnOffVisualization
    } = this.props;

    return (
      <div className="intervalsOptionsButtons">
        <LeftSideButtons
          sequenceOfNotes={sequenceOfNotes}
          typeOfInterval={typeOfInterval}
          settingsIsOpen={settingsIsOpen}
          showAnswer={showAnswer}
          sliceArr={sliceArr}
          play={play}
          actionSettingsClick={actionSettingsClick}
          actionNextButtonClick={actionNextButtonClick}
          actionGetNextInterval={actionGetNextInterval}
          actionTurnOffVisualization={actionTurnOffVisualization}
        />
        <RightSideButtons
          typeOfInterval={typeOfInterval}
          actionSetActiveTypeOfInterval={actionSetActiveTypeOfInterval}
        />
      </div>
    );
  }
}

export default IntervalsOptionButtons;
