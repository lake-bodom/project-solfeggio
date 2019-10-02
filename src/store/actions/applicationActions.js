import {
  MENU_ACTION,
  NEED_TO_WRITE_NOTE,
  WRITE_PLAY_NOTE,
  INIT_DICTATION,
  SET_MODE
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
  needToWriteNote,
  payload: { ...note, id: Date.now() }
});

export const actionInitDictation = bool => ({
  type: INIT_DICTATION,
  payload: bool
});

export const actionSetMode = ({ mode, stat }) => ({
  type: SET_MODE,
  payload: { mode, stat }
});

