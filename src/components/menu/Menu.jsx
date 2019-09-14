import React from "react";
import ReactDOM from "react-dom";
import "./menu.css";

import Burger from "../burger/Burger";
import MenuBody from "./MenuBody";

const Menu = ({ menuIsOpen, actionMenuAction }) => {
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

/* <div className="menu">
      <div className="menu-body" style={{ left: leftMenuBody }}>
        <nav className="nav">
          <NavLink onClick={clickHandler} to="/find-note">
            Искать ноту
          </NavLink>
          <NavLink onClick={clickHandler} to="/intervals">
            Поиск Интервала
          </NavLink>
          <NavLink onClick={clickHandler} to="/options">
            Настройки
          </NavLink>
        </nav>
      </div>
      <Burger
        left={leftBurger}
        clickHandler={clickHandler}
        menuIsOpen={menuIsOpen}
      />
    </div> */
