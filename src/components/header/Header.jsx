import React from "react";
import Stat from "../../containers/statContainer";
import "./header.css";

const Header = ({ stat, mode }) => {
  return (
    <div className="header">
      {stat ? <Stat /> : null}
      {mode ? <h2>{mode}</h2> : null}
    </div>
  );
};

export default Header;
