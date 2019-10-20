import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

import PropTypes from "prop-types";

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
      actionHideAnswer,
      actionUpdatePianoKeys
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
          actionUpdatePianoKeys={actionUpdatePianoKeys}
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

IntervalsOptionButtons.propTypes = {
  play: PropTypes.func.isRequired,
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  sequenceOfNotes: PropTypes.arrayOf(PropTypes.number),
  nextSequenceOfNotes: PropTypes.arrayOf(PropTypes.number),
  typeOfInterval: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool,
  actionSetActiveTypeOfInterval: PropTypes.func.isRequired,
  actionIntervalsSettingsAction: PropTypes.func.isRequired,
  actionNextButtonClick: PropTypes.func.isRequired,
  actionGetNextInterval: PropTypes.func.isRequired,
  actionStatisticsClearing: PropTypes.func.isRequired,
  actionHideAnswer: PropTypes.func.isRequired,
  actionSetMode: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired
};

export default IntervalsOptionButtons;
