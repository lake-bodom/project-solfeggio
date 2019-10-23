import {
  UPDATE_PIANO_KEYS,
  SET_BORDERS_OF_RANGE,
  SHOW_NOTES_ON_THE_PIANO
} from "../actionTypes";

export const actionUpdatePianoKeys = () => ({
  type: UPDATE_PIANO_KEYS
});

export const actionSetBordersOfRange = arr => ({
  type: SET_BORDERS_OF_RANGE,
  payload: { firstBorder: arr[0], secondBorder: arr[1] }
});

export const actionShowNotesOnThePiano = payload => ({
  type: SHOW_NOTES_ON_THE_PIANO,
  payload
});
