import React, { Component } from "react";
import "./App.css";

import MIDISounds from "midi-sounds-react";
import { Route, Switch } from "react-router-dom";

import Menu from "./containers/menuContainer";
import Header from "./containers/headerContainer";
import Piano from "./containers/pianoContainer";

import ChangeRangeOfNotes from "./containers/changeRangeOfNotesContainer";
import Intervals from "./components/intervals/Intervals";
import ActivateMidiContainer from "./containers/activateMidiContainer";
import FindNote from "./containers/findNoteContainer";
import Dictation from "./containers/dictationContainter";

class App extends Component {
  componentDidMount() {
    var bpm = 80;
    var N = (4 * 60) / bpm;
    var duration = N / 4;
    this.setState({ duration });
    // this.setState(this.state);
    // this.midiSounds.playChordNow(1, [60], 1);
    this.midiSounds.setEchoLevel(0);

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

  play = (note, onlyPlay) => {
    const { duration } = this.state;
    this.midiSounds.playChordNow(1, [note], duration);

    if (!onlyPlay) {
      if (this.props.needToWriteNote) {
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
            path="/intervals"
            render={() => <Intervals play={this.play} />}
          />
          <Route
            path="/find-note"
            render={() => <FindNote play={this.play} />}
          />
          <Route path="/options" render={() => <ChangeRangeOfNotes />} />
          <Route
            path="/dictation"
            render={() => <Dictation play={this.play} />}
          />
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

export default App;
