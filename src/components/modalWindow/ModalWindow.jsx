import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./modalWindow.css";

export default class ModalWindow extends Component {
  state = {
    opacity: 0
  };

  modal = document.createElement("div");

  componentDidMount() {
    this.modal.className = "modal-wrap";
    document.body.appendChild(this.modal);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      this.setState({
        opacity: 1
      });
    }, 100);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
    document.body.style.overflow = "auto";
  }

  closeHandler = () => {
    this.setState({
      opacity: 0
    });
    setTimeout(() => {
      this.props.close();
    }, 100);
  };

  render() {
    return ReactDOM.createPortal(
      <div className="modal-window" style={{ opacity: this.state.opacity }}>
        <span className="close" onClick={this.closeHandler}>
          &times;
        </span>
        {this.props.children}
      </div>,
      this.modal
    );
  }
}
