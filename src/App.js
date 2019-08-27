import React, { Component } from "react";
import "./App.css";

import MIDISounds from "midi-sounds-react";

import Header from "./components/header/Header";
import Piano from "./containers/pianoContainer";
import Intervals from "./containers/intervalsContainer";

import ChangeRangeOfNotes from "./components/changeRangeOfNotes/ChangeRangeOfNotes";

class App extends Component {
  state = {
    statistics: {
      name: "22",
      rightAnswers: 12,
      amountOfAnswers: 1,
      right: true,
      view: false
    }
  };

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
        <Header statistics={this.state.statistics} />
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
