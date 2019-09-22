import { GET_NEW_MELODY, CHANGE_MODE } from "../actionTypes";

export const actionGetNewMelody = sliceArr => ({
  type: GET_NEW_MELODY,
  sliceArr
});

export const actionChangeMode = payload => ({
  type: CHANGE_MODE,
  payload
});
