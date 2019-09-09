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

const getIndexes = key => {
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

const getNotesAndIndexes = (arrOfNotes, sequence, type) => {
  let indexes = [];

  sequence.forEach(elem => {
    indexes.push(getIndexes(elem));
  });

  let notes = [];

  for (let k = 0; k < indexes.length; k++) {
    let obj = {
      i: indexes[k].i,
      j: indexes[k].j
    };
    notes.push(setActiveTypeOfNote(arrOfNotes[obj.i][obj.j], type));
  }

  return {
    notes,
    indexes
  };
};

const getNewArrOfNotesAndIndexes = (arrOfNotes, sequence, right) => {
  const newArr = [...arrOfNotes];
  const { notes, indexes } = getNotesAndIndexes(arrOfNotes, sequence, right);

  for (const key in notes) {
    const i = indexes[key].i;
    const j = indexes[key].j;
    newArr[i][j] = notes[key];
  }

  return { indexes, arrOfNotes: newArr };
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
      let { arrOfNotes, indexes } = state;

      arrOfNotes = turnOff(arrOfNotes, indexes);

      const obj = getNewArrOfNotesAndIndexes(
        arrOfNotes,
        action.payload.sequence,
        action.payload.type
      );
      console.log(obj);

      return {
        ...state,
        arrOfNotes: obj.arrOfNotes,
        indexes: { ...state.indexes, ...obj.indexes }
      };
    }

    case TURN_OFF_VISUALIZATION: {
      const { arrOfNotes, indexes } = state;

      return {
        ...state,
        arrOfNotes: turnOff(arrOfNotes, indexes),
        indexes: []
      };
    }

    default: {
      return state;
    }
  }
};
