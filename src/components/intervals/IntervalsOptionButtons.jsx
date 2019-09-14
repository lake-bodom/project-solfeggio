import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

class IntervalsOptionButtons extends React.Component {
  componentDidMount() {
    this.props.actionGetNextInterval({ sliceArr: this.props.sliceArr });
  }

  componentWillUnmount() {
    const sequenceOfNotes = this.props.sequenceOfNotes;
    const sequence = [sequenceOfNotes[0], sequenceOfNotes[1]];
    this.props.actionTurnOffVisualization({ sequence });
    this.props.actionStatisticsClearing();
  }

  render() {
    const {
      sliceArr,
      play,
      typeOfInterval,
      sequenceOfNotes,
      nextSequenceOfNotes,
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
          nextSequenceOfNotes={nextSequenceOfNotes}
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
