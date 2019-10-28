import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  INTERVALS_SETTINGS_ACTION,
  INVERSE_CHOSEN_INTERVAL,
  GET_ANSWER_INTERVAL,
  SHOW_THE_CORRECT_INTERVAL,
  GET_NEXT_INTERVAL,
  SET_ACTIVE_KEYBOARD_INTERVAL
} from "../actionTypes";

export const actionSetActiveTypeOfInterval = active => ({
  type: SET_ACTIVE_TYPE_OF_INTERVAL,
  payload: active
});

export const actionIntervalsSettingsAction = payload => ({
  type: INTERVALS_SETTINGS_ACTION,
  payload
});

export const actionInverseChosenInterval = obj => ({
  type: INVERSE_CHOSEN_INTERVAL,
  payload: obj
});

export const actionGetAnswerIntervals = () => ({
  type: GET_ANSWER_INTERVAL
});

export const actionShowTheCorrectInterval = () => ({
  type: SHOW_THE_CORRECT_INTERVAL
});

export const actionGetNextInterval = options => ({
  type: GET_NEXT_INTERVAL,
  payload: options
});

export const actionSetActiveKeyboardInterval = obj => ({
  type: SET_ACTIVE_KEYBOARD_INTERVAL,
  payload: obj
});
