import React from "react";
import "./intervals.css";

import IntervalsOptionButtonsContainer from "../../containers/IntervalsOptionButtonsContainer";
import ListOfIntervalsContainer from "../../containers/listOfIntervalsContainer";

import PropTypes from "prop-types";

const Intervals = ({ play }) => {
  return (
    <div className="intervals">
      <IntervalsOptionButtonsContainer
        play={play}
      ></IntervalsOptionButtonsContainer>

      <ListOfIntervalsContainer />
    </div>
  );
};

Intervals.propTypes = {
  play: PropTypes.func.isRequired
};

export default Intervals;
