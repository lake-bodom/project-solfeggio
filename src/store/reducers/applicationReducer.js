import {
  MENU_ACTION,
  NEED_TO_WRITE_NOTE,
  WRITE_PLAY_NOTE
} from "../actionTypes";

const initialState = {
  menuIsOpen: false,
  playNote: null,
  needToWriteNote: false
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
      return { ...state, needToWriteNote: action.payload, playNote: null };
    }
    case WRITE_PLAY_NOTE: {
      return { ...state, playNote: action.payload, needToWriteNote: false };
    }
    default:
      return { ...state };
  }
};
