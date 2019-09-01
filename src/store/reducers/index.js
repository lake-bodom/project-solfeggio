import { combineReducers } from "redux";
import piano from "./pianoReducer";
import intervals from "./intervalsReducer";
import statistics from "./statisticsReducer";

export default combineReducers({
  piano,
  intervals,
  statistics
});
