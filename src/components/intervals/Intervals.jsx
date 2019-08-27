import React from "react";
import { connect } from "react-redux";
import "./intervals.css";
import ListOfIntervals from "./listOfIntervals/ListOfIntervals";

import {
  actionSetActiveTypeOfInterval,
  actionSetSequenceOfNotes
} from "../../store/actions/intervals";

import IntervalsOptionButtons from "./intervalsOptionButtons/IntervalsOptionButtons";

import PropTypes from "prop-types";

class Intervals extends React.Component {
  static propTypes = {
    intervals: PropTypes.object.isRequired,
    sliceArr: PropTypes.array.isRequired,
    actionSetActiveTypeOfInterval: PropTypes.func.isRequired,
    actionSetSequenceOfNotes: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
    sequenceOfNotes: PropTypes.array
  };

  componentDidMount() {
    this.getNewSequenceOfNotes();
  }

  getNewSequenceOfNotes = () => {
    const { sliceArr } = this.props;

    const { activeInterval } = this.props.intervals;
    const { numberOfSemitones } = activeInterval;

    const sequence = this.getBordersOfSequence(sliceArr, numberOfSemitones);

    this.props.actionSetSequenceOfNotes(sequence);
  };

  getBordersOfSequence = (arr, num) => {
    let firstNote = arr[Math.floor(Math.random() * arr.length)];
    let secondNote = arr[arr.indexOf(firstNote) + num];

    if (!secondNote) {
      secondNote = arr[arr.length - 1];
      firstNote = arr[arr.indexOf(secondNote) - num];
    }

    return [firstNote, secondNote];
  };

  render() {
    const {
      typesOfInterval,
      groupsOfIntervals,
      sequenceOfNotes
    } = this.props.intervals;
    const { actionSetActiveTypeOfInterval, play } = this.props;

    return (
      <div className="intervals">
        <IntervalsOptionButtons
          play={play}
          typesOfInterval={typesOfInterval}
          actionSetActiveTypeOfInterval={actionSetActiveTypeOfInterval}
          sequenceOfNotes={sequenceOfNotes}
        ></IntervalsOptionButtons>
        <div className={"intervalsButton"}>
          <ListOfIntervals groupsOfIntervals={groupsOfIntervals} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  intervals: state.intervals,
  sliceArr: state.piano.sliceArr
});

const mapDispatchToProps = {
  actionSetActiveTypeOfInterval,
  actionSetSequenceOfNotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intervals);
