import {
  dataOfIntervals,
  getChosenIntervals,
  getNewInterval
} from "../dataOfIntervals";

import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SET_SEQUENCE_OF_NOTES,
  SETTINGS_CLICK,
  INVERSE_CHOSEN_INTERVAL
} from "../actionTypes";

const allIntervals = [...dataOfIntervals];
let chosenIntervals = getChosenIntervals(allIntervals);

let activeInterval = getNewInterval(chosenIntervals);

const initialState = {
  allIntervals,
  typeOfInterval: "melodicUp",
  activeInterval,
  sequenceOfNotes: [],
  settingsIsOpen: false
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

    case SET_SEQUENCE_OF_NOTES: {
      return { ...state, sequenceOfNotes: action.payload };
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
    default: {
      return state;
    }
  }
};