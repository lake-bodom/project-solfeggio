import React from "react";
import SelectOfRange from "./SelectOfRange";
import "./changeRangeOfNotes.css";

import { connect } from "react-redux";

import {
  actionSetBordersOfRange,
  actionChangeNotesRange
} from "../../store/actions/pianoActions";

import Button from "../button/Button";

const ChangeRangeOfNotes = props => {
  const { firstBorder, secondBorder } = props.piano;

  const clickHandler = () => {
    props.actionChangeNotesRange();
  };

  return (
    <div className="changeRangeOfNotes">
      <SelectOfRange
        valueOfSelect={firstBorder.index}
        nameOfSelect="first"
        {...props}
      />
      <SelectOfRange
        valueOfSelect={secondBorder.index}
        nameOfSelect="second"
        {...props}
      />

      <Button onClick={clickHandler}>Выбрать диапазон</Button>
    </div>
  );
};

const mapStateToProps = ({ piano }) => ({
  piano
});

const mapDispatchToProps = {
  actionSetBordersOfRange,
  actionChangeNotesRange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeRangeOfNotes);
