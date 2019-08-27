import { getBaseArrayOfNotes, getFullArrayOfNotes } from "../../arrayOfNotes";
import { CHANGE_NOTES_RANGE, SET_BORDERS_OF_RANGE } from "../../actionTypes";

const baseArrOfNotes = getBaseArrayOfNotes();
const arrOfNotes = getFullArrayOfNotes(baseArrOfNotes);

const initialState = {
  baseArrOfNotes,
  arrOfNotes,
  firstBorder: { index: 0, key: baseArrOfNotes[0].key },
  secondBorder: {
    index: baseArrOfNotes.length - 1,
    key: baseArrOfNotes[baseArrOfNotes.length - 1].key
  },
  sliceArr: baseArrOfNotes,
  MIN_AMOUNT_OF_NOTES: 5
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BORDERS_OF_RANGE: {
      return { ...state, ...action.payload };
    }

    case CHANGE_NOTES_RANGE: {
      const sliceArr = getBaseArrayOfNotes(
        state.firstBorder.index,
        state.secondBorder.index
      );
      const arrOfNotes = getFullArrayOfNotes(sliceArr);
      return { ...state, arrOfNotes, sliceArr };
    }

    default: {
      return state;
    }
  }
};
