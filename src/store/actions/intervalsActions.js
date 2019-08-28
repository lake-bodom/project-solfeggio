import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SET_NEW_INTERVAL,
  SET_SEQUENCE_OF_NOTES,
  SETTINGS_CLICK,
  INVERSE_CHOSEN_INTERVAL
} from "../actionTypes";

export const actionSetActiveTypeOfInterval = active => ({
  type: SET_ACTIVE_TYPE_OF_INTERVAL,
  payload: active
});

export const actionSetNewInterval = () => ({
  type: SET_NEW_INTERVAL
});

export const actionSetSequenceOfNotes = arr => ({
  type: SET_SEQUENCE_OF_NOTES,
  payload: arr
});

export const actionSettingsClick = () => ({
  type: SETTINGS_CLICK
});

export const actionInverseChosenInterval = obj => ({
  type: INVERSE_CHOSEN_INTERVAL,
  payload: obj
});
