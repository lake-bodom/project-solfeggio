import {
  MENU_ACTION,
  NEED_TO_WRITE_NOTE,
  WRITE_PLAY_NOTE,
  INIT_DICTATION
} from "../actionTypes";

export const actionMenuAction = isOpen => ({
  type: MENU_ACTION,
  payload: { isOpen }
});

export const actionNeedToWriteNote = bool => ({
  type: NEED_TO_WRITE_NOTE,
  payload: bool
});

export const actionWritePlayNote = (note, needToWriteNote) => ({
  type: WRITE_PLAY_NOTE,
  note,
  needToWriteNote
});

export const actionInitDictation = bool => ({
  type: INIT_DICTATION,
  payload: bool
});
