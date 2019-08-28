import { CHANGE_NOTES_RANGE, SET_BORDERS_OF_RANGE } from "../actionTypes";

export const actionChangeNotesRange = active => ({
  type: CHANGE_NOTES_RANGE,
  payload: active
});

export const actionSetBordersOfRange = arr => ({
  type: SET_BORDERS_OF_RANGE,
  payload: { firstBorder: arr[0], secondBorder: arr[1] }
});
