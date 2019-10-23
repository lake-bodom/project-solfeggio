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

    // this.setState(this.state);
    // this.midiSounds.playChordNow(1, [60], 1);
    this.midiSounds.setEchoLevel(this.props.echoLevel);

    document.getElementById("root").addEventListener("click", () => {
      if (this.props.menuIsOpen) {
        this.props.actionMenuAction(false);
      }
    });

    document.body.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        this.props.actionMenuAction();
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.echoLevel !== this.props.echoLevel) {
      this.midiSounds.setEchoLevel(this.props.echoLevel);
    }
  }

  play = (key, onlyPlay) => {
    const { duration } = this.props;
    this.midiSounds.playChordNow(1, [key], duration);

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
            instruments={[1]}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  echoLevel: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  needToWriteNote: PropTypes.bool.isRequired,
  modeDictation: PropTypes.bool.isRequired,
  sliceArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  mapIndex: PropTypes.object.isRequired,
  actionMenuAction: PropTypes.func.isRequired,
  actionWritePlayNote: PropTypes.func.isRequired
};



export default App;
