import {
  CHANGE_NOTES_RANGE,
  SET_BORDERS_OF_RANGE,
  SHOW_NOTES_ON_THE_PIANO,
  TURN_OFF_VISUALIZATION
} from "../actionTypes";

export const actionChangeNotesRange = active => ({
  type: CHANGE_NOTES_RANGE,
  payload: active
});

export const actionSetBordersOfRange = arr => ({
  type: SET_BORDERS_OF_RANGE,
  payload: { firstBorder: arr[0], secondBorder: arr[1] }
});

export const actionShowNotesOnThePiano = payload => ({
  type: SHOW_NOTES_ON_THE_PIANO,
  payload
});

export const actionTurnOffVisualization = payload => ({
  type: TURN_OFF_VISUALIZATION,
  payload
});
