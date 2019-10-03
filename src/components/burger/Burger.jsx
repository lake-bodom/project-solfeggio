import React from "react";
import "./burger.css";

import PropTypes from "prop-types";

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

Burger.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  left: PropTypes.string.isRequired
};


export default Burger;
