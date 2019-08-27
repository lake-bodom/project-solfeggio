import { combineReducers } from "redux";
import piano from "./pianoReducer";
import intervals from "./intervalsReducer";

export default combineReducers({
  piano,
  intervals
});
