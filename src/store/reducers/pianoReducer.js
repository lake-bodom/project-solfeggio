import {
  getBaseArrayOfNotes,
  getFullArrayOfNotes,
  getMapIndex
} from "../arrayOfNotes";
import {
  CHANGE_NOTES_RANGE,
  SET_BORDERS_OF_RANGE,
  SHOW_NOTES_ON_THE_PIANO,
  TURN_OFF_VISUALIZATION
} from "../actionTypes";

const baseArrOfNotes = getBaseArrayOfNotes();
const arrOfNotes = getFullArrayOfNotes(baseArrOfNotes);

const getIndexes = key => {
  const indexesOfNote = getMapIndex(key);

  const i = indexesOfNote.i;
  const j = indexesOfNote.j;

  return { i, j };
};

const setVisualEffect = ({ arrOfNotes, sequence, type, active }) => {
  let arr = [...arrOfNotes];
  sequence.forEach(element => {
    const { i, j } = getIndexes(element);

    if (active) {
      arr[i][j][type] = true;
    } else {
      if (!type) {
        arr[i][j].right = false;
        arr[i][j].wrong = false;
      } else {
        arr[i][j][type] = false;
      }
    }
  });

  return arr;
};

const initialState = {
  baseArrOfNotes,
  arrOfNotes,
  firstBorder: { index: 0, key: baseArrOfNotes[0].key },
  secondBorder: {
    index: baseArrOfNotes.length - 1,
    key: baseArrOfNotes[baseArrOfNotes.length - 1].key
  },
  sliceArr: baseArrOfNotes,
  minAmountOfNotes: 5
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

    case SHOW_NOTES_ON_THE_PIANO: {
      let { arrOfNotes } = state;

      const { sequence, type } = action.payload;

      return {
        ...state,
        arrOfNotes: setVisualEffect({
          arrOfNotes,
          sequence,
          type,
          active: true
        })
      };
    }

    case TURN_OFF_VISUALIZATION: {
      let { arrOfNotes } = state;

      const { sequence, type } = action.payload;

      return {
        ...state,
        arrOfNotes: setVisualEffect({
          arrOfNotes,
          sequence,
          type,
          active: false
        })
      };
    }

    default: {
      return state;
    }
  }
};
