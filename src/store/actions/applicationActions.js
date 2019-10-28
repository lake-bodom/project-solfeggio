import {
  MENU_ACTION,
  NEED_TO_WRITE_NOTE,
  WRITE_PLAY_NOTE,
  INIT_DICTATION,
  SET_MODE,
  SET_INITIAL_STATE,
  SET_ECHO_LEVEL,
  SET_BPM_LEVEL,
  SET_INSTRUMENTID,
  KEYBOARD_SET_PLAY_FLAG,
  SET_MODAL_WINDOW_FLAG,
  DATA_CLEARING_FLAG,
  KEYBOARD_SET_PLAY_WRITTEN_MELODY_FLAG,
  KEYBOARD_SET_CHANGE_MODE_FLAG,
  KEYBOARD_SET_DICTATION_CLEAR_NOTE_FLAG,
  KEYBOARD_SET_DICTATION_CHECK_FLAG,
  KEYBOARD_SET_INTERVAL_BUTTON_FLAG,
  KEYBOARD_SET_NEW_HOT_KEY_FLAG
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

export const actionApplicationSetInitialState = () => ({
  type: SET_INITIAL_STATE
});

export const actionSetEchoLevel = (payload) => ({
  type: SET_ECHO_LEVEL,
  payload
});

export const actionSetBpmLevel = (payload) => ({
  type: SET_BPM_LEVEL,
  payload
});

export const actionSetInstrumentId = (payload) => ({
  type: SET_INSTRUMENTID,
  payload
});

export const actionKeyboardSetPlayFlag = (payload) => ({
  type: KEYBOARD_SET_PLAY_FLAG,
  payload
});

export const actionSetModalWindowFlag = (payload) => ({
  type: SET_MODAL_WINDOW_FLAG,
  payload
});

export const actionSetDataClearingFlag = (payload) => ({
  type: DATA_CLEARING_FLAG,
  payload
});

export const actionKeyboardSetPlayWrittenMelodyFlag = (payload) => ({
  type: KEYBOARD_SET_PLAY_WRITTEN_MELODY_FLAG,
  payload
});

export const actionKeyboardSetChangeModeFlag = (payload) => ({
  type: KEYBOARD_SET_CHANGE_MODE_FLAG,
  payload
});

export const actionKeyboardSetDictationClearNoteFlag = (payload) => ({
  type: KEYBOARD_SET_DICTATION_CLEAR_NOTE_FLAG,
  payload
});

export const actionKeyboardSetDictationCheckFlag = (payload) => ({
  type: KEYBOARD_SET_DICTATION_CHECK_FLAG,
  payload
});

export const actionKeyboardSetIntervalButtonFlag = (bool, interval = 0) => ({
  type: KEYBOARD_SET_INTERVAL_BUTTON_FLAG,
  payload: {
    intervalButtonFlag: bool,
    interval
  }
});

export const actionKeyboardSetNewHotKeyFlag = (payload) => ({
  type: KEYBOARD_SET_NEW_HOT_KEY_FLAG,
  payload
});
