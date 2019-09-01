import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SETTINGS_CLICK,
  INVERSE_CHOSEN_INTERVAL,
  GET_ANSWER_INTERVAL,
  SHOW_THE_CORRECT_INTERVAL,
  GET_NEXT_INTERVAL
} from "../actionTypes";

export const actionSetActiveTypeOfInterval = active => ({
  type: SET_ACTIVE_TYPE_OF_INTERVAL,
  payload: active
});

export const actionSettingsClick = () => ({
  type: SETTINGS_CLICK
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

export const actionGetNextInterval = sliceArr => ({
  type: GET_NEXT_INTERVAL,
  sliceArr
});
