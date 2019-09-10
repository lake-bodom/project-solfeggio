import {
  dataOfIntervals,
  getChosenIntervals,
  getNewInterval,
  getNewSequenceOfNotes
} from "../dataOfIntervals";

import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SETTINGS_CLICK,
  INVERSE_CHOSEN_INTERVAL,
  SHOW_THE_CORRECT_INTERVAL,
  GET_NEXT_INTERVAL
} from "../actionTypes";

const allIntervals = [...dataOfIntervals];

const getNewActiveInterval = arr => {
  let chosenIntervals = getChosenIntervals(arr);

  let activeInterval = getNewInterval(chosenIntervals);

  return activeInterval;
};

const initialState = {
  allIntervals,
  typeOfInterval: "melodicUp",
  activeInterval: "",
  sequenceOfNotes: [],
  settingsIsOpen: false,
  showAnswer: false
};

const findIndex = (arr, name) => {
  const index = arr.findIndex(obj => obj.name === name);
  return index;
};

const getLengthOfChosenIntervals = arr => {
  return arr.reduce((sum, elem) => {
    return elem.chosen ? sum + 1 : sum;
  }, 0);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TYPE_OF_INTERVAL: {
      return { ...state, typeOfInterval: action.payload };
    }

    case SETTINGS_CLICK: {
      return { ...state, settingsIsOpen: !state.settingsIsOpen };
    }

    case INVERSE_CHOSEN_INTERVAL: {
      const { payload } = action;
      const chosen = payload.chosen;

      const allIntervals = [...state.allIntervals];

      if (chosen && getLengthOfChosenIntervals(allIntervals) <= 2) {
        return { ...state };
      }

      const index = findIndex(allIntervals, payload.name);
      payload.chosen = !payload.chosen;

      allIntervals[index] = payload;

      return { ...state, allIntervals };
    }

    case SHOW_THE_CORRECT_INTERVAL: {
      return { ...state, showAnswer: true };
    }

    case GET_NEXT_INTERVAL: {
      const { sliceArr, changeTheIntervalList } = action.payload;
      const { allIntervals } = state;
      let { nextSequenceOfNotes, nextActiveInterval } = state;

      const activeInterval = !changeTheIntervalList
        ? nextActiveInterval
          ? nextActiveInterval
          : getNewActiveInterval(allIntervals)
        : getNewActiveInterval(allIntervals);

      const sequenceOfNotes = !changeTheIntervalList
        ? nextSequenceOfNotes
          ? nextSequenceOfNotes
          : getNewSequenceOfNotes(sliceArr, activeInterval)
        : getNewSequenceOfNotes(sliceArr, activeInterval);

      nextActiveInterval = getNewActiveInterval(allIntervals);
      nextSequenceOfNotes = getNewSequenceOfNotes(sliceArr, nextActiveInterval);

      return {
        ...state,
        activeInterval,
        sequenceOfNotes,
        showAnswer: false,
        nextActiveInterval,
        nextSequenceOfNotes
      };
    }

    default: {
      return state;
    }
  }
};
