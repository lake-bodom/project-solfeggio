import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

const MenuBody = ({ left, clickHandler }) => {
  return (
    <div className="menu-body" style={{ left: left }}>
      <nav className="nav">
        <NavLink onClick={clickHandler} to="/">
          Свободная игра
        </NavLink>
        <NavLink onClick={clickHandler} to="/find-note">
          Искать ноту
        </NavLink>
        <NavLink onClick={clickHandler} to="/intervals">
          Поиск Интервала
        </NavLink>
        <NavLink onClick={clickHandler} to="/dictation">
          Музыкальный диктант
        </NavLink>
        <NavLink onClick={clickHandler} to="/options">
          Настройки
        </NavLink>
      </nav>
    </div>
  );
};

MenuBody.propTypes = {
  left: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default MenuBody;
