import React from "react";
import { connect } from "react-redux";

import "./piano.css";
import PianoBody from "./PianoBody";

import PropTypes from "prop-types";

class Piano extends React.Component {
  render() {
    const { arrOfNotes, play } = this.props;
    return (
      <React.Fragment>
        <div className="piano">
          <PianoBody arrOfNotes={arrOfNotes} play={play} />
        </div>
      </React.Fragment>
    );
  }
}

Piano.propTypes = {
  arrOfNotes: PropTypes.arrayOf(PropTypes.array),
  play: PropTypes.func.isRequired
};

const mapStateToProps = ({ piano, intervals }) => ({
  arrOfNotes: piano.arrOfNotes,
  sequenceOfNotes: intervals.sequenceOfNotes
});

export default connect(mapStateToProps)(Piano);
