import React from "react";
import "./intervals.css";

import IntervalsOptionButtonsContainer from "../../containers/IntervalsOptionButtonsContainer";
import ListOfIntervalsContainer from "../../containers/listOfIntervalsContainer";

import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Intervals = ({ play }) => {
  return (
    <ErrorBoundary>
      <div className="intervals">
        <IntervalsOptionButtonsContainer
          play={play}
        ></IntervalsOptionButtonsContainer>

        <ListOfIntervalsContainer />
      </div>
    </ErrorBoundary>
  );
};

Intervals.propTypes = {
  play: PropTypes.func.isRequired
};

export default Intervals;
