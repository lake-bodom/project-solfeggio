import React from "react";
import "./burger.css";

const Burger = ({ clickHandler, menuIsOpen, left }) => {
  const className = `burger${menuIsOpen ? " active" : ""}`;
  return (
    <div style={{ left: left }} className={className} onClick={clickHandler}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default Burger;
