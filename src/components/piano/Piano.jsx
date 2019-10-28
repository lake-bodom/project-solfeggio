import React from "react";

import "./piano.css";
import PianoBody from "./PianoBody";

import PropTypes from "prop-types";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Piano extends React.Component {
  render() {
    const { arrOfNotes, play } = this.props;
    return (
      <ErrorBoundary>
        <div className="piano">
          <PianoBody arrOfNotes={arrOfNotes} play={play} />
        </div>
      </ErrorBoundary>
    );
  }
}

Piano.propTypes = {
  arrOfNotes: PropTypes.arrayOf(PropTypes.array),
  play: PropTypes.func.isRequired
};

export default Piano;
