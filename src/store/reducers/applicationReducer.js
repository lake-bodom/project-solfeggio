import {
  MENU_ACTION,
  NEED_TO_WRITE_NOTE,
  WRITE_PLAY_NOTE,
  INIT_DICTATION,
  SET_MODE,
  SET_INITIAL_STATE,
  SET_ECHO_LEVEL,
  SET_BPM_LEVEL
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
  echoLevel: 0.5,
  bpm,
  duration
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

    case SET_INITIAL_STATE: {

      const { mode, stat } = state;

      return {
        mode,
        stat,
        menuIsOpen: false,
        playNote: null,
        needToWriteNote: false,
        modeDictation: false
      };
    }

    default:
      return { ...state };
  }
};
