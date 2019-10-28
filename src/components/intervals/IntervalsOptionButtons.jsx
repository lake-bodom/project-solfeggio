import React from "react";
import LeftSideButtons from "./LeftSideButtons";
import RightSideButtons from "./RightSideButtons";

import PropTypes from "prop-types";

class IntervalsOptionButtons extends React.Component {
  componentDidMount() {
    const initNewIntervalSequence = true;

    if (this.props.settingsIsOpen) {
      this.props.actionIntervalsSettingsAction(false);
    }

    this.props.actionGetNextInterval({
      sliceArr: this.props.sliceArr,
      initNewIntervalSequence
    });

    this.props.actionSetMode({ mode: "Поиск интервала", stat: true });
    this.props.actionUpdatePianoKeys();

    if (this.props.playFlag) {
      this.props.actionKeyboardSetPlayFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
  }

  componentWillUnmount() {
    this.props.actionStatisticsClearing();
    this.props.actionIntervalsSettingsAction(false);
    if (this.props.playFlag) {
      this.props.actionKeyboardSetPlayFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
    if (this.props.changeModeFlag) {
      this.props.actionKeyboardSetChangeModeFlag(false);
    }
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
      duration,
      actionSetActiveTypeOfInterval,
      actionIntervalsSettingsAction,
      actionNextButtonClick,
      actionGetNextInterval,
      actionHideAnswer,
      actionUpdatePianoKeys,
      playFlag,
      actionKeyboardSetPlayFlag,
      changeModeFlag,
      actionKeyboardSetChangeModeFlag
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
          duration={duration}
          play={play}
          actionIntervalsSettingsAction={actionIntervalsSettingsAction}
          actionNextButtonClick={actionNextButtonClick}
          actionGetNextInterval={actionGetNextInterval}
          actionUpdatePianoKeys={actionUpdatePianoKeys}
          actionHideAnswer={actionHideAnswer}
          playFlag={playFlag}
          actionKeyboardSetPlayFlag={actionKeyboardSetPlayFlag}
        />
        <RightSideButtons
          typeOfInterval={typeOfInterval}
          actionSetActiveTypeOfInterval={actionSetActiveTypeOfInterval}
          changeModeFlag={changeModeFlag}
          actionKeyboardSetChangeModeFlag={actionKeyboardSetChangeModeFlag}
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
  duration: PropTypes.number.isRequired,
  actionSetActiveTypeOfInterval: PropTypes.func.isRequired,
  actionIntervalsSettingsAction: PropTypes.func.isRequired,
  actionNextButtonClick: PropTypes.func.isRequired,
  actionGetNextInterval: PropTypes.func.isRequired,
  actionStatisticsClearing: PropTypes.func.isRequired,
  actionHideAnswer: PropTypes.func.isRequired,
  actionSetMode: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired,
  settingsIsOpen: PropTypes.bool,
  actionKeyboardSetPlayFlag: PropTypes.func.isRequired,
  playFlag: PropTypes.bool.isRequired,
  changeModeFlag: PropTypes.bool.isRequired,
  actionKeyboardSetChangeModeFlag: PropTypes.func.isRequired



};

export default IntervalsOptionButtons;
