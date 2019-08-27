import React from "react";
import PianoKey from "./PianoKey";

import PropTypes from "prop-types";

const PianoSection = ({ elem, play }) => {
  const section = elem.map(elem => {
    const sharp = elem.name.includes("#");
    let className = ["piano-key"];
    const colorKey = sharp ? "piano-black-key" : "piano-white-key";
    className.push(colorKey);

    if (elem.active) {
      className.push("piano-key-active");
    }
    if (elem.right) {
      className.push("piano-key-right");
    }

    if (elem.wrong) {
      className.push("piano-key-wrong");
    }

    return (
      <PianoKey play={play} key={elem.key} elem={elem} className={className} />
    );
  });

  return section;
};

PianoSection.propTypes = {
  play: PropTypes.func,
  elem: PropTypes.arrayOf(PropTypes.object)
};

PianoSection.defaultProps = {
  play: () => {},
  elem: []
};

export default PianoSection;
