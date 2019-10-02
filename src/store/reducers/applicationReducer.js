import {
  MENU_ACTION,
  NEED_TO_WRITE_NOTE,
  WRITE_PLAY_NOTE,
  INIT_DICTATION,
  SET_MODE
} from "../actionTypes";

const initialState = {
  menuIsOpen: false,
  playNote: null,
  needToWriteNote: false,
  modeDictation: false,
  mode: "",
  stat: true
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

    default:
      return { ...state };
  }
};
