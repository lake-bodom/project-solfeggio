import React, { Component } from "react";
import "./App.css";

import MIDISounds from "midi-sounds-react";
import { Route, Switch } from "react-router-dom";

import Menu from "./containers/menuContainer";
import Header from "./containers/headerContainer";
import Piano from "./containers/pianoContainer";

import Intervals from "./components/intervals/Intervals";
import ActivateMidiContainer from "./containers/activateMidiContainer";
import FindNote from "./containers/findNoteContainer";
import Dictation from "./containers/dictationContainter";
import FreeMode from "./containers/freeModeContainer";
import Settings from "./containers/settingsContainer";

import PropTypes from "prop-types";

class App extends Component {
  componentDidMount() {
    this.midiSounds.setEchoLevel(this.props.echoLevel);

    document.getElementById("root").addEventListener("click", () => {
      if (this.props.menuIsOpen) {
        this.props.actionMenuAction(false);
      }
    });

    document.body.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (this.props.modalWindowFlag) {
          this.props.actionSetModalWindowFlag(false);
        } else {
          this.props.actionMenuAction();
        }
      }
      if (e.key === "Enter" && !this.props.playFlag) {
        this.props.actionKeyboardSetPlayFlag(true);
      }

      if (e.key === "+" && !this.props.playWrittenMelodyFlag) {
        this.props.actionKeyboardSetPlayWrittenMelodyFlag(true);
      }

      if (e.key === " " && !this.props.changeModeFlag) {
        this.props.actionKeyboardSetChangeModeFlag(true);
      }

      if (e.key === "Backspace" && !this.props.dictationClearNoteFlag) {
        this.props.actionKeyboardSetDictationClearNoteFlag(true);
      }

      if (e.key === "-" && !this.props.dictationCheckFlag) {
        this.props.actionKeyboardSetDictationCheckFlag(true);
      }

      console.log(e);
      // e.preventDefault();
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.echoLevel !== this.props.echoLevel) {
      this.midiSounds.setEchoLevel(this.props.echoLevel);
    }

    if (prevProps.instrumentId !== this.props.instrumentId) {
      this.midiSounds.playChordNow(this.props.instrumentId, [60], 0);
    }
  }

  play = (key, onlyPlay) => {
    const { duration, instrumentId } = this.props;
    this.midiSounds.playChordNow((instrumentId ? instrumentId : 1), [key], duration);


    if (!onlyPlay) {
      if (this.props.needToWriteNote) {
        const note = this.props.sliceArr.find(elem => elem.key === key);

        if (this.props.modeDictation) {
          this.props.actionWritePlayNote(note, true);
        } else {
          this.props.actionWritePlayNote(note, false);
        }
      }
    }
  };

  render() {
    const { instrumentId } = this.props;
    return (
      <div className="app">
        <Menu />
        <Header />
        <Piano play={this.play} />

        <Switch>
          <Route
            path="/"
            exact
            render={() => <FreeMode />}
          />
          <Route
            path="/intervals"
            render={() => <Intervals play={this.play} />}
          />
          <Route
            path="/find-note"
            render={() => <FindNote play={this.play} />}
          />
          <Route
            path="/dictation"
            render={() => <Dictation play={this.play} />}
          />
          <Route path="/options" render={() => <Settings play={this.play} />} />
        </Switch>

        <ActivateMidiContainer play={this.play} />
        <div className="midiComponent" style={{ display: "none" }}>
          <MIDISounds
            ref={ref => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[instrumentId ? instrumentId : 1]}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  instrumentId: PropTypes.number.isRequired,
  echoLevel: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  needToWriteNote: PropTypes.bool.isRequired,
  modeDictation: PropTypes.bool.isRequired,
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  mapIndex: PropTypes.object.isRequired,
  actionMenuAction: PropTypes.func.isRequired,
  actionWritePlayNote: PropTypes.func.isRequired,
  actionKeyboardSetPlayFlag: PropTypes.func.isRequired,
  modalWindowFlag: PropTypes.bool,
  actionSetModalWindowFlag: PropTypes.func.isRequired,
  playFlag: PropTypes.bool.isRequired,
  playWrittenMelodyFlag: PropTypes.bool.isRequired,
  actionKeyboardSetPlayWrittenMelodyFlag: PropTypes.func.isRequired,
  changeModeFlag: PropTypes.bool.isRequired,
  actionKeyboardSetChangeModeFlag: PropTypes.func.isRequired,
  dictationClearNoteFlag: PropTypes.bool.isRequired,
  actionKeyboardSetDictationClearNoteFlag: PropTypes.func.isRequired,
  actionKeyboardSetDictationCheckFlag: PropTypes.func.isRequired,
  dictationCheckFlag: PropTypes.bool.isRequired
};



export default App;
