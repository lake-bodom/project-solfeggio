import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

class IntervalsOptionButtons extends React.Component {
  componentDidMount() {
    const initNewIntervalSequence = true;

    this.props.actionGetNextInterval({
      sliceArr: this.props.sliceArr,
      initNewIntervalSequence
    });

    this.props.actionSetMode({ mode: "Поиск интервала", stat: true });
    this.props.actionUpdatePianoKeys();
  }

  componentWillUnmount() {
    const sequenceOfNotes = this.props.sequenceOfNotes;
    const sequence = [sequenceOfNotes[0], sequenceOfNotes[1]];
    this.props.actionTurnOffVisualization({ sequence });
    this.props.actionStatisticsClearing();
    this.props.actionIntervalsSettingsAction(false);
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
      actionIntervalsSettingsAction,
      actionNextButtonClick,
      actionGetNextInterval,
      actionTurnOffVisualization,
      actionHideAnswer
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
          actionIntervalsSettingsAction={actionIntervalsSettingsAction}
          actionNextButtonClick={actionNextButtonClick}
          actionGetNextInterval={actionGetNextInterval}
          actionTurnOffVisualization={actionTurnOffVisualization}
          actionHideAnswer={actionHideAnswer}
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
