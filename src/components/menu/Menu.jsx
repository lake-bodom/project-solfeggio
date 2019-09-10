import React, { Component } from "react";
import "./menu.css";

import { NavLink } from "react-router-dom";

import Burger from "../burger/Burger";

export default class Menu extends Component {
  state = {
    menuIsOpen: false
  };

  clickHandler = e => {
    this.setState(({ menuIsOpen }) => ({ menuIsOpen: !menuIsOpen }));
  };

  render() {
    const menuIsOpen = this.state.menuIsOpen;
    const clickHandler = this.clickHandler;
    const leftBurger = menuIsOpen ? "260px" : "10px";
    const leftMenuBody = menuIsOpen ? "0px" : "-1000px";
    return (
      <div className="menu">
        <div className="menu-body" style={{ left: leftMenuBody }}>
          <nav className="nav">
            <NavLink onClick={this.clickHandler} to="/find-note">
              Искать ноту
            </NavLink>
            <NavLink onClick={this.clickHandler} to="/intervals">
              Поиск Интервала
            </NavLink>
            <NavLink onClick={this.clickHandler} to="/options">
              Настройки
            </NavLink>
          </nav>
        </div>
        <Burger
          left={leftBurger}
          clickHandler={clickHandler}
          menuIsOpen={menuIsOpen}
        />
      </div>
    );
  }
}
