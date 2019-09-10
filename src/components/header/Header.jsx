import React from "react";
import Stat from "./stat/Stat";
import "./header.css";

const Header = ({ statistics }) => {
  return (
    <div className="header">
      <Stat stat={statistics} />
    </div>
  );
};

export default Header;
