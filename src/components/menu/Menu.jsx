import React from "react";
import ReactDOM from "react-dom";
import "./menu.css";

import Burger from "../burger/Burger";
import MenuBody from "./MenuBody";

import PropTypes from "prop-types";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


const Menu = ({ menuIsOpen, actionMenuAction }) => {
  const leftBurger = menuIsOpen ? "260px" : "10px";
  const leftMenuBody = menuIsOpen ? "0px" : "-1000px";

  const menuHandler = () => {
    actionMenuAction();
  };

  return ReactDOM.createPortal(
    <ErrorBoundary>
      <div className="menu">
        <MenuBody left={leftMenuBody} clickHandler={menuHandler} />
        <Burger
          left={leftBurger}
          clickHandler={menuHandler}
          menuIsOpen={menuIsOpen}
        />
      </div>
    </ErrorBoundary>,
    document.getElementById("menu")
  );
};

Menu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  actionMenuAction: PropTypes.func.isRequired
};

export default Menu;
