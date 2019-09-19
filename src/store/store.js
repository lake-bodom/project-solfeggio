import { createStore } from "redux";
import rootReducer from "./reducers";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const state = store.getState();

  const sliceState = {};

  sliceState.piano = state.piano;

  const { allIntervals, typeOfInterval } = state.intervals;
  sliceState.intervals = { allIntervals, typeOfInterval };

  localStorage.setItem("reduxState", JSON.stringify(sliceState));
});
