import React from "react";

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

export default Piano;
