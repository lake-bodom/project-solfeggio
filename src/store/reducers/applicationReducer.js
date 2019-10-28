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

let bpm = 80;
let duration = 60 / bpm;

const initialState = {
  menuIsOpen: false,
  playNote: null,
  needToWriteNote: false,
  modeDictation: false,
  mode: "",
  stat: true,
  echoLevel: 0.3,
  bpm,
  duration,
  instrumentId: 1,
  dataIsClearing: false,
  playFlag: false,
  playWrittenMelodyFlag: false,
  modalWindowFlag: false,
  changeModeFlag: false,
  dictationClearNoteFlag: false,
  dictationCheckFlag: false,
  intervalsKeyboardFlag: {
    intervalButtonFlag: false,
    interval: 0
  },
  hotKeys: {
    newHotKey: {
      change: false,
      newHotKeyType: "",
      index: null,
      key: null
    },
    closeHotKey: "Escape",
    playHotKey: "Enter",
    playWrittenMelodyHoteKey: "+",
    changeModeHoteKey: " ",
    dictationClearNoteHoteKey: "Backspace",
    dictationCheckHoteKey: "-",
    listOfIntervalsHotKeys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "/", "*"]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_ACTION: {
      let { menuIsOpen } = state;
      let { isOpen } = action.payload;

      if (typeof isOpen === "boolean") {
        menuIsOpen = isOpen;
      } else {
        menuIsOpen = !menuIsOpen;
      }

      return { ...state, menuIsOpen };
    }

    case NEED_TO_WRITE_NOTE: {
      return {
        ...state,
        needToWriteNote: action.payload || false,
        playNote: null
      };
    }

    case WRITE_PLAY_NOTE: {
      return {
        ...state,
        playNote: { ...action.payload },
        needToWriteNote: action.needToWriteNote
      };
    }

    case INIT_DICTATION: {
      return { ...state, modeDictation: action.payload };
    }

    case SET_MODE: {
      return { ...state, ...action.payload };
    }

    case SET_ECHO_LEVEL: {
      return { ...state, echoLevel: action.payload };
    }

    case SET_BPM_LEVEL: {
      const bpm = action.payload;
      const duration = 60 / bpm;
      return { ...state, bpm, duration };
    }

    case SET_INSTRUMENTID: {
      return { ...state, instrumentId: action.payload };
    }

    case SET_MODAL_WINDOW_FLAG: {
      return { ...state, modalWindowFlag: action.payload };
    }

    case DATA_CLEARING_FLAG: {
      return { ...state, dataIsClearing: action.payload };
    }

    case KEYBOARD_SET_PLAY_FLAG: {
      return { ...state, playFlag: action.payload };
    }

    case KEYBOARD_SET_PLAY_WRITTEN_MELODY_FLAG: {
      return { ...state, playWrittenMelodyFlag: action.payload };
    }

    case KEYBOARD_SET_CHANGE_MODE_FLAG: {
      return { ...state, changeModeFlag: action.payload };
    }

    case KEYBOARD_SET_DICTATION_CLEAR_NOTE_FLAG: {
      return { ...state, dictationClearNoteFlag: action.payload };
    }

    case KEYBOARD_SET_DICTATION_CHECK_FLAG: {
      return { ...state, dictationCheckFlag: action.payload };
    }

    case KEYBOARD_SET_INTERVAL_BUTTON_FLAG: {
      return { ...state, intervalsKeyboardFlag: action.payload };
    }

    case KEYBOARD_SET_NEW_HOT_KEY_FLAG: {

      let newHotKey = action.payload;
      let hotKeys = { ...state.hotKeys };
      const listOfIntervalsHotKeys = [...hotKeys.listOfIntervalsHotKeys];

      if (!newHotKey.key && !newHotKey.change) {
        return { ...state, hotKeys: { ...state.hotKeys, newHotKey } };
      }

      if (newHotKey.key && !newHotKey.change && hotKeys.newHotKey.change) {

        for (const elem in hotKeys) {
          if (hotKeys.hasOwnProperty(elem) && elem !== newHotKey.newHotKeyType) {
            if (hotKeys[elem] === newHotKey.key) {
              hotKeys[elem] = null;
            }
          } else {
            hotKeys[elem] = newHotKey.key;
          }
        }



        for (let i = 0; i < listOfIntervalsHotKeys.length; i++) {
          if (newHotKey.index === null || newHotKey.index !== i) {
            if (listOfIntervalsHotKeys[i] === newHotKey.key) {
              listOfIntervalsHotKeys[i] = null;
            }
          } else {
            listOfIntervalsHotKeys[i] = newHotKey.key;
          }
        }

        hotKeys.newHotKey = newHotKey;
        hotKeys.listOfIntervalsHotKeys = listOfIntervalsHotKeys;

        return { ...state, hotKeys: { ...hotKeys } };
      }



      return { ...state, hotKeys: { ...state.hotKeys, newHotKey } };

    }

    case SET_INITIAL_STATE: {

      const { mode, stat } = state;

      return {
        ...initialState,
        mode,
        stat
      };
    }

    default:
      return { ...state };
  }
};
