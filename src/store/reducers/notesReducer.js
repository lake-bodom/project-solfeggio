import { SET_ACTIVE_NOTE } from "../actionTypes";

const initialState = { note: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_NOTE: {
      const sliceArr = action.sliceArr;
      const note = sliceArr[Math.floor(Math.random() * sliceArr.length)].key;

      return { ...state, note };
    }


    default:
      return { ...state };
  }
};
