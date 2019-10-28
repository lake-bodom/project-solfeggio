import React from "react";
import Stat from "../../containers/statContainer";
import "./header.css";

import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Header = ({ stat, mode }) => {
  return (
    <ErrorBoundary>
      <div className="header">
        {stat ? <Stat /> : null}
        {mode ? <h2>{mode}</h2> : null}
      </div>
    </ErrorBoundary>
  );
};

Header.propTypes = {
  stat: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired
};

export default Header;
