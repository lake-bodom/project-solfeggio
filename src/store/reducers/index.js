import { combineReducers } from "redux";
import application from "./applicationReducer";
import piano from "./pianoReducer";
import intervals from "./intervalsReducer";
import statistics from "./statisticsReducer";
import notes from "./notesReducer";
import dictation from "./dictationReducer";

export default combineReducers({
  application,
  piano,
  intervals,
  statistics,
  notes,
  dictation
});
