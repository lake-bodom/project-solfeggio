import React from "react";
import "./intervals.css";
// import ListOfIntervals from "./ListOfIntervals";

import ListOfIntervalsContainer from "../../containers/listOfIntervalsContainer";

import IntervalsOptionButtonsContainer from "../../containers/IntervalsOptionButtonsContainer";

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
    const { play } = this.props;

    return (
      <div className="intervals">
        <IntervalsOptionButtonsContainer
          play={play}
        ></IntervalsOptionButtonsContainer>

        <ListOfIntervalsContainer />
      </div>
    );
  }
}

export default Intervals;
