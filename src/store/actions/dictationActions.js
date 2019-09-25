import {
  GET_NEW_MELODY,
  CHANGE_MODE,
  ADD_NOTE_TO_ANSWER_ARRAY,
  POP_LAST_ELEM_FROM_ANSWER_ARRAY,
  WRITE_ANSWERS,
  CLEAR_WRITTEN_MELODY
} from "../actionTypes";

export const actionGetNewMelody = sliceArr => ({
  type: GET_NEW_MELODY,
  sliceArr
});

export const actionChangeMode = payload => ({
  type: CHANGE_MODE,
  payload
});

export const actionAddNoteToAnswerArray = payload => ({
  type: ADD_NOTE_TO_ANSWER_ARRAY,
  payload
});

export const actionPopLastElemFromAnswerArray = () => ({
  type: POP_LAST_ELEM_FROM_ANSWER_ARRAY
});

export const actionWriteAnswers = arr => ({
  type: WRITE_ANSWERS,
  payload: arr
});

export const actionClearWrittenMelody = () => ({
  type: CLEAR_WRITTEN_MELODY
});
