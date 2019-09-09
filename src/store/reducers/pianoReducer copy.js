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
const mapIndex = getMapIndex();

const getIndexes = (arrOfNotes, key) => {
  const indexesOfNote = mapIndex[key];
  const i = indexesOfNote.i;
  const j = indexesOfNote.j;

  return { i, j };
};

const setActiveTypeOfNote = (obj, type) => {
  obj = { ...obj };

  obj[type] = true;

  return obj;
};

const getNotesOfInterval = (arrOfNotes, sequence, right) => {
  const firstNote = sequence[0].key;
  const secondNote = sequence[1].key;

  const indexes = [
    getIndexes(arrOfNotes, firstNote),
    getIndexes(arrOfNotes, secondNote)
  ];

  const { i: i1, j: j1 } = indexes[0];
  const { i: i2, j: j2 } = indexes[1];

  const type = right ? "right" : "wrong";

  const first = setActiveTypeOfNote(arrOfNotes[i1][j1], type);
  const second = setActiveTypeOfNote(arrOfNotes[i2][j2], type);

  return {
    first,
    second,
    indexes
  };
};

const getNewArrOfNotesAndIndexes = (arrOfNotes, sequence, right) => {
  const newArr = [...arrOfNotes];
  const notes = getNotesOfInterval(arrOfNotes, sequence, right);

  const i1 = notes.indexes[0].i;
  const j1 = notes.indexes[0].j;

  const i2 = notes.indexes[1].i;
  const j2 = notes.indexes[1].j;

  newArr[i1][j1] = notes.first;
  newArr[i2][j2] = notes.second;

  return { indexes: notes.indexes, arrOfNotes: newArr };
};

const turnOff = (arr, indexes) => {
  arr = [...arr];
  for (let key in indexes) {
    const i = indexes[key].i;
    const j = indexes[key].j;
    const elem = { ...arr[i][j] };

    elem.right = false;
    elem.wrong = false;
    elem.active = false;

    arr[i][j] = elem;
  }

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
  minAmountOfNotes: 5,
  mapIndex,
  indexes: []
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
      const mapIndex = getMapIndex();

      return { ...state, arrOfNotes, sliceArr, mapIndex };
    }

    case SHOW_NOTES_ON_THE_PIANO: {
      const { arrOfNotes } = state;

      const obj = getNewArrOfNotesAndIndexes(
        arrOfNotes,
        action.payload.sequenceOfNotes,
        action.payload.right
      );
      // indexes: [...state.indexes, obj.indexes]

      return {
        ...state,
        arrOfNotes: obj.arrOfNotes,
        indexes: obj.indexes
      };
    }

    case TURN_OFF_VISUALIZATION: {
      const { arrOfNotes, indexes } = state;

      return { ...state, arrOfNotes: turnOff(arrOfNotes, indexes) };
    }

    default: {
      return state;
    }
  }
};
