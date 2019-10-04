import React from "react";
import Stat from "../../containers/statContainer";
import "./header.css";

import PropTypes from "prop-types";

const Header = ({ stat, mode }) => {
  return (
    <div className="header">
      {stat ? <Stat /> : null}
      {mode ? <h2>{mode}</h2> : null}
    </div>
  );
};

Header.propTypes = {
  stat: PropTypes.bool.isRequired,
  mode: PropTypes.string.isRequired
};

export default Header;
