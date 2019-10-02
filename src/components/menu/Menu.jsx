import React from "react";
import ReactDOM from "react-dom";
import "./menu.css";

import Burger from "../burger/Burger";
import MenuBody from "./MenuBody";

const Menu = ({ menuIsOpen, actionMenuAction, play }) => {
  const leftBurger = menuIsOpen ? "260px" : "10px";
  const leftMenuBody = menuIsOpen ? "0px" : "-1000px";

  const menuHandler = () => {
    actionMenuAction();
  };

  return ReactDOM.createPortal(
    <div className="menu">
      <MenuBody left={leftMenuBody} clickHandler={menuHandler} />
      <Burger
        left={leftBurger}
        clickHandler={menuHandler}
        menuIsOpen={menuIsOpen}
      />
    </div>,
    document.getElementById("menu")
  );
};

export default Menu;
