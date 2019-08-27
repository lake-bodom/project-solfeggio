import React from "react";
import Burger from "./burger/Burger";
import Stat from "./stat/Stat";
import "./header.css";

const Header = props => {
  return (
    <div className="header">
      <Burger />
      <Stat stat={props.statistics} />
    </div>
  );
};

export default Header;
