import React, { Component } from "react";
import "./App.css";

import MIDISounds from "midi-sounds-react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Header from "./containers/headerContainer";
import Piano from "./containers/pianoContainer";

import ChangeRangeOfNotes from "./containers/changeRangeOfNotesContainer";
import Intervals from "./components/intervals/Intervals";
import ActivateMidiContainer from "./containers/activateMidiContainer";
import FindNote from "./components/findNote/FindNote";

class App extends Component {
  componentDidMount() {
    // this.setState(this.state);
    // this.midiSounds.playChordNow(1, [60], 1);
    this.midiSounds.setEchoLevel(0.1);
  }

  play = note => {
    var bpm = 120;
    var N = (4 * 60) / bpm;
    var duration = N / 4;
    this.midiSounds.playChordNow(1, [note], duration);
  };

  render() {
    return (
      <React.Fragment>
        <Menu />
        <Header />
        <Piano play={this.play} />

        <Switch>
          <Route
            path="/intervals"
            render={() => <Intervals play={this.play} />}
          />
          <Route path="/find-note" render={() => <FindNote />} />
        </Switch>

        <ChangeRangeOfNotes />

        <ActivateMidiContainer play={this.play} />
        <div className="midiComponent" style={{ display: "none" }}>
          <MIDISounds
            ref={ref => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[1]}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
