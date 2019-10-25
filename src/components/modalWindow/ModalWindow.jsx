import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./modalWindow.css";
import ButtonsGroup from "../buttonsGroup/ButtonsGroup";
import Button from "../button/Button";

import PropTypes from "prop-types";


export default class ModalWindow extends Component {

  modal = document.createElement("div");

  componentDidMount() {
    this.modal.className = "modal-wrap";
    document.body.appendChild(this.modal);
    document.body.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    document.body.removeChild(this.modal);
    document.body.style.overflowY = "auto";
  }

  closeHandler = () => {
    setTimeout(() => {
      this.props.close();
    }, 100);
  };

  saveHandler = () => {
    this.closeHandler();
    this.props.saveButtonHandler();
  };

  cancelHandler = () => {
    this.closeHandler();
    this.props.cancelButtonHandler();
  };

  render() {
    const {
      saveButton,
      saveButtonName,
      cancelButton,
      cancelButtonName
    } = this.props;


    return ReactDOM.createPortal(
      <div className="modal-window" >
        <span className="close" onClick={this.closeHandler}>
          &times;
        </span>
        {this.props.children}
        <ButtonsGroup cls="flex">
          {saveButton ? (
            <Button onClick={this.saveHandler} cls="info">
              {saveButtonName}
            </Button>
          ) : null}
          {cancelButton ? (
            <Button onClick={this.cancelHandler} cls="danger">
              {cancelButtonName}
            </Button>
          ) : null}
        </ButtonsGroup>
      </div>,
      this.modal
    );
  }
}

ModalWindow.propTypes = {
  close: PropTypes.func.isRequired,
  saveButton: PropTypes.bool.isRequired,
  saveButtonName: PropTypes.string,
  cancelButton: PropTypes.bool.isRequired,
  cancelButtonName: PropTypes.string,
  children: PropTypes.node.isRequired,
  saveButtonHandler: PropTypes.func,
  cancelButtonHandler: PropTypes.func
};

ModalWindow.defaultProps = {
  cancelButtonHandler: () => { }
};
