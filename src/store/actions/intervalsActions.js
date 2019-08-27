import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SET_NEW_INTERVAL,
  SET_SEQUENCE_OF_NOTES
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
