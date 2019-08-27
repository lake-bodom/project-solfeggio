import React from "react";

import PropTypes from "prop-types";

const PianoKey = ({ elem, className, sharp, play }) => {
  const handleClick = () => {
    play(elem.key);
  };
  return (
    <div className={className.join(" ")} onClick={handleClick}>
      {sharp ? elem.name : elem.fullName}
    </div>
  );
};

PianoKey.propTypes = {
  elem: PropTypes.shape({
    key: PropTypes.number,
    name: PropTypes.string,
    fullName: PropTypes.string
  }),
  className: PropTypes.arrayOf(PropTypes.string),
  sharp: PropTypes.bool,
  play: PropTypes.func
};

PianoKey.defaultProps = {
  play: () => {}
};

export default PianoKey;
