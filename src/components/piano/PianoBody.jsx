import React from "react";
import PianoSection from "./PianoSection";

import PropTypes from "prop-types";

const PianoBody = ({ arrOfNotes, play }) => {
  const bodyPiano = arrOfNotes.map(elem => {
    const elemJSX = <PianoSection elem={elem} play={play} />;
    return (
      <div key={elem[0].fullName} className={"piano-keys-section"}>
        {elemJSX}
      </div>
    );
  });

  return bodyPiano;
};

PianoBody.propTypes = {
  arrOfNotes: PropTypes.arrayOf(PropTypes.array),
  play: PropTypes.func
};

PianoBody.defaultProps = {
  arrOfNotes: [],
  play: () => {}
};

export default PianoBody;
