import React from "react";
import Burger from "./burger/Burger";
import Stat from "./stat/Stat";
import "./header.css";

const Header = ({ statistics }) => {
  return (
    <div className="header">
      <Burger />
      <Stat stat={statistics} />
    </div>
  );
};

export default Header;
