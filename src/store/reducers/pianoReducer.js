import {
  getBaseArrayOfNotes,
  getFullArrayAndMapIndexes,
  setVisualEffect
} from "../arrayOfNotes";

import {
  UPDATE_PIANO_KEYS,
  SET_BORDERS_OF_RANGE,
  SHOW_NOTES_ON_THE_PIANO,
  TURN_OFF_VISUALIZATION
} from "../actionTypes";

import { dataOfIntervals } from "../dataOfIntervals";

const baseArrOfNotes = getBaseArrayOfNotes();
const { arrOfNotes, mapIndex } = getFullArrayAndMapIndexes(baseArrOfNotes);
const numberOfSemitones = dataOfIntervals.map(elem => elem.numberOfSemitones);
const minAmountOfNotes = Math.max.apply(null, numberOfSemitones);

const initialState = {
  baseArrOfNotes,
  arrOfNotes,
  mapIndex,
  firstBorder: { index: 0, key: baseArrOfNotes[0].key },
  secondBorder: {
    index: baseArrOfNotes.length - 1,
    key: baseArrOfNotes[baseArrOfNotes.length - 1].key
  },
  sliceArr: baseArrOfNotes,
  minAmountOfNotes
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BORDERS_OF_RANGE: {
      return { ...state, ...action.payload };
    }

    case UPDATE_PIANO_KEYS: {
      const sliceArr = getBaseArrayOfNotes(
        state.firstBorder.index,
        state.secondBorder.index
      );
      const { arrOfNotes, mapIndex } = getFullArrayAndMapIndexes(sliceArr);

      return { ...state, arrOfNotes, sliceArr, mapIndex };
    }

    case SHOW_NOTES_ON_THE_PIANO: {
      let { arrOfNotes, mapIndex } = state;

      const { sequence, type } = action.payload;

      return {
        ...state,
        arrOfNotes: setVisualEffect({
          arrOfNotes,
          sequence,
          type,
          active: true,
          mapIndex
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
          active: false,
          mapIndex
        })
      };
    }

    default: {
      return state;
    }
  }
};
