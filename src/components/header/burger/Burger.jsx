import React, { Component } from "react";
import "./burger.css";

export default class Burger extends Component {
  state = {
    menuIsOpen: false
  };

  clickHandler = e => {
    this.setState(({ menuIsOpen }) => ({ menuIsOpen: !menuIsOpen }));
  };

  render() {
    const { menuIsOpen } = this.state;
    const className = `burger${menuIsOpen ? " active" : ""}`;

    return (
      <div className={className} onClick={this.clickHandler}>
        <span />
        <span />
        <span />
      </div>
    );
  }
}
