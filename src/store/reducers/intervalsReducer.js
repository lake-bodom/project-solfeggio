import {
  dataOfIntervals,
  getChosenIntervals,
  getNewInterval,
  getNewSequenceOfNotes
} from "../dataOfIntervals";

import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  INTERVALS_SETTINGS_ACTION,
  INVERSE_CHOSEN_INTERVAL,
  SHOW_THE_CORRECT_INTERVAL,
  GET_NEXT_INTERVAL,
  SET_INITIAL_STATE,
  SET_ACTIVE_KEYBOARD_INTERVAL
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
  activeInterval: null,
  nextActiveInterval: "",
  sequenceOfNotes: [],
  settingsIsOpen: false,
  showAnswer: false,
  activeKeyboardInterval: {}
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

const getNewData = ({
  initNewIntervalSequence,
  nextActiveInterval,
  nextSequenceOfNotes,
  sliceArr,
  allIntervals
}) => {

  const activeInterval = !initNewIntervalSequence
    ? nextActiveInterval
      ? nextActiveInterval
      : getNewActiveInterval(allIntervals)
    : getNewActiveInterval(allIntervals);


  const sequenceOfNotes = !initNewIntervalSequence
    ? nextSequenceOfNotes
      ? nextSequenceOfNotes
      : getNewSequenceOfNotes(sliceArr, activeInterval)
    : getNewSequenceOfNotes(sliceArr, activeInterval);

  nextActiveInterval = getNewActiveInterval(allIntervals);
  nextSequenceOfNotes = getNewSequenceOfNotes(sliceArr, nextActiveInterval);

  return {
    sequenceOfNotes,
    nextActiveInterval,
    nextSequenceOfNotes,
    activeInterval
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TYPE_OF_INTERVAL: {
      return { ...state, typeOfInterval: action.payload };
    }

    case INTERVALS_SETTINGS_ACTION: {
      const settingsIsOpen = action.payload;
      return { ...state, settingsIsOpen };
    }

    case INVERSE_CHOSEN_INTERVAL: {
      const interval = { ...action.payload };
      const chosen = interval.chosen;

      const allIntervals = [...state.allIntervals];

      if (chosen && getLengthOfChosenIntervals(allIntervals) <= 2) {
        return { ...state };
      }

      const index = findIndex(allIntervals, interval.name);
      interval.chosen = !interval.chosen;

      allIntervals[index] = interval;

      return { ...state, allIntervals };
    }

    case SHOW_THE_CORRECT_INTERVAL: {
      return { ...state, showAnswer: true };
    }

    case GET_NEXT_INTERVAL: {
      const { sliceArr, initNewIntervalSequence } = action.payload;
      const { allIntervals } = state;

      let {
        sequenceOfNotes,
        nextActiveInterval,
        nextSequenceOfNotes,
        activeInterval
      } = getNewData({
        sliceArr,
        initNewIntervalSequence,
        allIntervals,
        nextActiveInterval: state.nextActiveInterval,
        nextSequenceOfNotes: state.nextSequenceOfNotes
      });

      return {
        ...state,
        activeInterval,
        sequenceOfNotes,
        showAnswer: false,
        nextActiveInterval,
        nextSequenceOfNotes
      };
    }


    case SET_ACTIVE_KEYBOARD_INTERVAL: {
      return { ...state, activeKeyboardInterval: action.payload };
    }

    case SET_INITIAL_STATE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
