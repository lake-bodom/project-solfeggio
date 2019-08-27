import { combineReducers } from "redux";
import piano from "./piano";
import intervals from "./intervals";

export default combineReducers({
  piano,
  intervals
});
