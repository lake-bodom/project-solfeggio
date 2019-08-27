import {
  dataOfIntervals,
  filterOfIntervals,
  createGroupsOfIntervals,
  getNewInterval
} from "../dataOfIntervals";

import {
  SET_ACTIVE_TYPE_OF_INTERVAL,
  SET_SEQUENCE_OF_NOTES
} from "../actionTypes";

let arrOfFilteredIntervals = filterOfIntervals(dataOfIntervals);

let groupsOfIntervals = createGroupsOfIntervals(arrOfFilteredIntervals);

let activeInterval = getNewInterval(arrOfFilteredIntervals);

const initialState = {
  dataOfIntervals: [...dataOfIntervals],
  arrOfFilteredIntervals,
  groupsOfIntervals,
  typesOfInterval: {
    melodicUp: true,
    melodicDown: false,
    harmonic: false
  },
  activeInterval,
  sequenceOfNotes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TYPE_OF_INTERVAL: {
      const { typesOfInterval } = state;

      for (const key in typesOfInterval) {
        typesOfInterval[key] = false;
      }

      typesOfInterval[action.payload] = true;

      return { ...state, typesOfInterval };
    }

    case SET_SEQUENCE_OF_NOTES: {
      return { ...state, sequenceOfNotes: action.payload };
    }

    default: {
      return state;
    }
  }
};
