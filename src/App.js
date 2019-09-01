import React, { Component } from "react";
import "./App.css";

import MIDISounds from "midi-sounds-react";

import Header from "./containers/headerContainer";
import Piano from "./containers/pianoContainer";
// import Intervals from "./containers/intervalsContainer";

import ChangeRangeOfNotes from "./containers/changeRangeOfNotesContainer";
import Intervals from "./components/intervals/Intervals";

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
        <Header />
        <Piano play={this.play} />
        <ChangeRangeOfNotes />
        <Intervals play={this.play} />

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
